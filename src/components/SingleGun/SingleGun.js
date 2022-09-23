import React, { useState } from "react";
import Modal from "../Modal/Modal";

const SingleGun = (props) => {
  const [modalData, setModalData] = useState({});
  //   console.log(props);
  const { guns, countIncrease } = props;
  //   console.log(gun);
  const { name, img, action, bullet, price } = guns;
  return (
    <div>
      <div className="card w-full bg-base-100 shadow-xl">
        <figure>
          <img className="w-[100%] h-60" src={img} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {name}
            <div className="badge badge-secondary">NEW</div>
          </h2>
          <p>Price: ${price}</p>
          <div className="card-actions justify-end">
            <div className="badge badge-outline">{action}</div>
            <div className="badge badge-outline">{bullet}</div>
          </div>
          <div className="text-right">
            <button
              onClick={() => countIncrease()}
              className="btn btn-success "
            >
              Add to Cart
            </button>
            <label
              onClick={() => setModalData(guns)}
              htmlFor="my-modal-3"
              className="btn modal-button btn-warning ml-1"
            >
              Details
            </label>
          </div>
        </div>
        {modalData && (
          <Modal data={modalData} setModalData={setModalData}></Modal>
        )}
      </div>
    </div>
  );
};

export default SingleGun;
