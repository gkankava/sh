import React from "react";

const Card = ({ img, title, content, btn, ico, href, disabled }) => {
  return (
    <div className="blog-card">
      <img className="blog-img" src={img} alt="..." />
      <div className="text-overlay">
        <h2>{title}</h2>
        <p>
          {content}
          <a
            href={href}
            class="read-more"
            target="_blank"
            rel="noopener noreferrer"
            disabled={disabled}
          >
            <i class={ico}></i>
            {btn}
          </a>
        </p>
      </div>
    </div>
  );
};
export default Card;
