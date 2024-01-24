import { IoClose } from "react-icons/io5";

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center z-50 p-11">
      <div className="w-72 h-44 bg-white  rounded-lg shadow-lg p-2 relative bg-gradient-to-tr from-purple-600 to-yellow-500 hover:scale-125 transition-transform ease-in delay-75">
        <div className="flex justify-end">
          <IoClose
            onClick={onClose}
            className="text-xl cursor-pointer rotate-45 text-blue-500 hover:rotate-90 hover:scale-150  transition-transform ease-in-out delay-150"
          />
        </div>
        <div className="flex flex-col items-center pt-12 justify-center text-red-100 text-2xl ">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;
