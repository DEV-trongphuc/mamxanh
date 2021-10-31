export const handleOnload = (e, index) => {
     e.preventDefault();
     e.target.style.opacity = "1";
     const loader = document.querySelectorAll(".fade-container");
     loader[index] && (loader[index].style.display = "none");
};
export const handleReLoad = () => {
     const loader = document.querySelectorAll(".fade-container");
     loader.forEach((item) => {
          item.style.display = "block";
     });
};
