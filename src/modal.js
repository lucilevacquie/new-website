const Modal = ({ title, text }) => {
  return (
    <div className="absolute top-0 z-20 h-48 w-48 bg-no-repeat bg-cover bg-[url('/public/img/window.svg')]">
      <div className="text-3xl text-darkGreen text-center font-bold">
        {title}
      </div>
      <div>{text}</div>
    </div>
  );
};

export default Modal;
