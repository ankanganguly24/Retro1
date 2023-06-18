var t1 = gsap.timeline();

t1.from("#page1", {
    y: "100vh",
    duration: 1,
    delay: 1
})

const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});