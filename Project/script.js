function revealMessage(){
	document.getElementById("hiddenMessage").style.display ='block';
}

const tl = gsap.timeline({ defaults: { ease: ".intoo"}});

tl.to(".text", { y: "0%", duration: 1, stagger: 0.25 });
tl.to(".slider", { y: "-100%", duration: 1.5, delay: 0.5 });
tl.to(".introo", { y: "-100%", duration: 1 }, "-=1");
// JavaScript Document