const tl = gsap.timeline();
tl.from(".app header .image img", {
    opacity: 0,
    duration: 1,
    x: -150,
})
tl.from(".app .circles span", {
    y: 100,
    opacity: 0,
    duration: 1,
    stagger: 0.25,
})
