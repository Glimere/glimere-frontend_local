import React from 'react'

export default function ProductColor(props) {
  return (
    <div className="w-full">
                <div className="flex flex-wrap gap-[3px]">
                  {props.colors.attributes.colors.data.map((color, id) => (
                    <div key={color.id} className={`flex h-[30px] w-[30px] p-[3px] hover:p-[4px] justify-center items-center border-[1px] border-[#ED7534] hover:border-[1px] rounded-full cursor-pointer duration-100`}
                    >
                      <div className={`flex h-full w-full justify-center items-center ${`bg-[${color.attributes.code}]`} rounded-full`}>
                      </div>
                    </div>
                  ))}

                  {/* <div className="flex justify-center space-x-2">
          <input id="nativeColorPicker1" type="color" value="#6590D5" />
          <button
            id="burronNativeColor"
            type="button"
            className="inline-block rounded bg-blue-600 px-6 py-2.5 text-xs font-medium uppercase leading-tight text-white-100 shadow-md transition duration-150 ease-in-out hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg">
            Button
          </button>
        </div> */}

                </div>

              </div>
  )
}
