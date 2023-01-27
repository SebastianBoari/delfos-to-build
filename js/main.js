

















window.addEventListener('load', () => {
  btnGetStartedEvent();
  btnSignUpEvent();
  btnSignInEvent();
  dockEventsListeners();

  let swiper = new Swiper(".mySwiper", {
    pagination: {
      el: ".swiper-pagination",
    },
    autoplay: true,
  });
});