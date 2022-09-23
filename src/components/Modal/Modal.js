import React from "react";

const Modal = ({ data, setModalData }) => {
  //   console.log(data);
  const { name, img, action, bullet, capacity, category, price } = data;
  return (
    <div>
      <input type="checkbox" id="my-modal-3" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            onClick={() => setModalData(null)}
            htmlFor="my-modal-3"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          {/* card */}
          <div className="card w-96 bg-base-100 mx-auto">
            {/* image */}
            <figure>
              <img className="rounded-lg" src={img} alt="Shoes" />
            </figure>

            {/* Card details */}
            <div className="card-body">
              <h2 className="card-title">
                {name}
                <div className="badge badge-secondary">NEW</div>
              </h2>
              <p>
                <span className="text-lg">Action:</span> {action}
              </p>
              <p>
                <span className="text-lg">Category:</span> {category}
              </p>
              <p>
                <span className="text-lg">Capacity:</span> {capacity}
              </p>
              <p>
                <span className="text-lg">Bullet:</span> {bullet}
              </p>
              <p>
                <span className="text-lg">Price:</span> ${price}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
