import style from './AboutUs__Image.css';


export default function AboutImg() {
  return (
    <div className="about-img">
      <div className="about-img_box about-img_image--1">
        <img
          src={"https://images.pexels.com/photos/4348222/pexels-photo-4348222.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"}
          alt=""
          className="about-img__image "
        />
      </div>
      <div className="about-img_box about-img_image--2">
        <img
          src={"https://images.pexels.com/photos/12000109/pexels-photo-12000109.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"}
          alt=""
          className="about-img__image "
        />
      </div>
      <div className="about-img_box about-img_image--3">
        <img
          src={"https://images.pexels.com/photos/4348226/pexels-photo-4348226.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"}
          alt=""
          className="about-img__image "
        />
      </div>
    </div>
  );
}