import Royal_Clothes from "../assets/3D/Royal_Clothes_Model-v2.glb"
import Gown3D from "../assets/3D/Gown3D-v6.glb"
import sleevelessdress from "../assets/3D/sleevelessdress-v1.glb"
import Stylishpink from "../assets/3D/Stylishpink_dress_2-v2.glb"
import WCheongsam from "../assets/3D/Stylishpink_dress-v3.glb"
import WomensDress from "../assets/3D/WCheongsam-v4.glb"
import assymetricDress from "../assets/3D/asymmetricdress-v2-v1.glb"

export const modelData = [
  {
    path: Royal_Clothes,
    dressColor: "#ffffff",
    mannequinColor: "#f0c67e",
    boxSize: {
      desktop: { min: -1000, max: 15000 },
      mobile: { min: -1000, max: 8000 }
    },
    modelPosition: {
      desktop: [0, -2.5, 0],
      mobile: [0, -2, 0]
    },
    cameraPosition: {
      desktop: [0, 0, 9.5],
      mobile: [0, 0, 11]
    }
  },
  {
    path: assymetricDress,
    dressColor: "#000000",
    mannequinColor: "#ffffff",
    boxSize: {
      desktop: { min: -1000, max: 15000 },
      mobile: { min: -1000, max: 8000 }
    },
    modelPosition: {
      desktop: [0, -2.5, 0],
      mobile: [0, -2, 0]
    },
    cameraPosition: {
      desktop: [0, 0, 9.5],
      mobile: [0, 0, 11]
    }
  },
  {
    path: Gown3D,
    dressColor: "#c5946c",
    mannequinColor: "",
    boxSize: {
      desktop: { min: -1000, max: 11800 },
      mobile: { min: -1000, max: 8200 }
    },
    modelPosition: {
      desktop: [0, -40, 0],
      mobile: [0, -25, 0]
    },
    cameraPosition: {
      desktop: [0, 0, 100],
      mobile: [0, 0, 90]
    }
  },
  // {
  //   path: assymetric,
  //   boxSize: {
  //     desktop: { min: -1000, max: 15000 },
  //     mobile: { min: -1000, max: 8000 }
  //   },
  //   modelPosition: {
  //     desktop: [0, -2.5, 0],
  //     mobile: [0, -2, 0]
  //   },
  //   cameraPosition: {
  //     desktop: [0, 0, 9.5],
  //     mobile: [0, 0, 11]
  //   }
  // },
  {
    path: sleevelessdress,
    dressColor: "#fffae0",
    mannequinColor: "#f0c67e",
    boxSize: {
      desktop: { min: -1000, max: 13500 },
      mobile: { min: -1000, max: 9850 }
    },
    modelPosition: {
      desktop: [0, -35, 0],
      mobile: [0, -22, 0]
    },
    cameraPosition: {
      desktop: [0, 0, 100],
      mobile: [0, 0, 90]
    }
  },
  {
    path: Stylishpink,
    dressColor: "#ff1c67",
    mannequinColor: "",
    boxSize: {
      desktop: { min: -1000, max: 15000 },
      mobile: { min: -1000, max: 8000 }
    },
    modelPosition: {
      desktop: [0, -37, 0],
      mobile: [0, -35, 0]
    },
    cameraPosition: {
      desktop: [0, 0, 75],
      mobile: [0, 0, 90]
    }
  },
  {
    path: WCheongsam,
    dressColor: "#ff5294",
    mannequinColor: "",
    boxSize: {
      desktop: { min: -1000, max: 15000 },
      mobile: { min: -1000, max: 8000 }
    },
    modelPosition: {
      desktop: [0, -37, 0],
      mobile: [0, -35, 0]
    },
    cameraPosition: {
      desktop: [0, 0, 75],
      mobile: [0, 0, 90]
    }
  },
  {
    path: WomensDress,
    dressColor: "#ffffff",
    mannequinColor: "#f0c67e",
    boxSize: {
      desktop: { min: -1000, max: 13500 },
      mobile: { min: -1000, max: 9850 }
    },
    modelPosition: {
      desktop: [0, -35, 0],
      mobile: [0, -22, 0]
    },
    cameraPosition: {
      desktop: [0, 0, 100],
      mobile: [0, 0, 90]
    }
  },
  {
    path: "/src/assets/3D/WomensDress-v5.glb",
    dressColor: "#ffffff",
    mannequinColor: "#000000",
    boxSize: {
      desktop: { min: -1000, max: 13500 },
      mobile: { min: -1000, max: 9850 }
    },
    modelPosition: {
      desktop: [0, -38, 0],
      mobile: [0, -23, 0]
    },
    cameraPosition: {
      desktop: [0, 0, 100],
      mobile: [0, 0, 90]
    }
  }
]