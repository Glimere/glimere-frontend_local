import { create } from 'zustand';
import axios from 'axios';
import { getJwt } from '@/lib/cookie';
import { ApiResponse, Notification } from '@/types';


interface NotificationState {
  notifications: Notification[];
  loading: boolean;
  addNotification: (notification: Notification) => void;
  getNotifications: () => void;
  markAsRead: (id: string) => void;
  deleteNotification: (id: string) => void;
  setNotifications: (notifications: Notification[]) => void;
  setLoading: (loading: boolean) => void;
}

const useNotificationStore = create<NotificationState>((set) => ({
  notifications: [],
  loading: false,

  addNotification: (notification) => {
    set((state) => ({
      notifications: [...state.notifications, notification],
    }));
  },

  getNotifications: async () => {
    const token = await getJwt();
    if (!token) {
      console.warn('User is not authenticated. Cannot fetch notifications.');
      return;
    }

    set({ loading: true });
    try {
      const response = await axios.get<ApiResponse>(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/notification`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.data.status === 'success') {
        set({
          notifications: response.data.data,
          loading: false,
        });
      } else {
        console.error('Error fetching notifications:', response.data.message);
        set({ loading: false });
      }
    } catch (error) {
      console.error('Failed to fetch notifications:', error);
      set({ loading: false });
    }
  },

  markAsRead: async (id: string) => {
    const token = await getJwt();
    if (!token) {
      console.warn('User is not authenticated. Cannot mark notification as read.');
      return;
    }

    set({ loading: true });
    try {
      await axios.put(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/notification/${id}/read`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      set((state) => ({
        notifications: state.notifications.map((notif) =>
          notif._id === id ? { ...notif, isRead: true } : notif
        ),
        loading: false,
      }));
    } catch (error) {
      console.error('Failed to mark notification as read:', error);
      set({ loading: false });
    }
  },

  deleteNotification: async (id: string) => {
    const token = await getJwt();
    if (!token) {
      console.warn('User is not authenticated. Cannot delete notification.');
      return;
    }

    set({ loading: true });
    try {
      await axios.delete(`${process.env.NEXT_PUBLIC_BASE_URL}/api/notification/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      set((state) => ({
        notifications: state.notifications.filter((notif) => notif._id !== id),
        loading: false,
      }));
    } catch (error) {
      console.error('Failed to delete notification:', error);
      set({ loading: false });
    }
  },

  setNotifications: (notifications: Notification[]) => {
    set({ notifications });
  },

  setLoading: (loading: boolean) => {
    set({ loading });
  },
}));

export default useNotificationStore;
