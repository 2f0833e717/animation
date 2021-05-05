let wrap = document.getElementsByClassName("wrap")[0];
let cover = wrap.getElementsByClassName("cover")[0];
let text = wrap.getElementsByTagName("p")[0];

console.log("run animation start");

// animation settings
let startDurationPrm = 450;
let endDurationPrm = 150;
let wordFlash = true;
let animationLoopFlag = true;
let animationDelayFlag = true;
const delayTime = function() {
  if (animationDelayFlag == true){
    return 180;
  }
}

let anim = function () {
  let timeline = anime.timeline({
    delay: delayTime,
  });

  timeline
    //1
    .add({
      targets: cover,
      duration: startDurationPrm,
      // duration: startDurationPrm * anime.random(0.1, 0.5),
      easing: "easeInExpo",
      begin: () => {
        cover.style.transformOrigin = "left";
        if (wordFlash == true) {
          text.style.visibility = "hidden";
        }
      },
      scaleX: [0, 1],
      background: "#03a9f4",
    })
    .add({
      targets: cover,
      duration: endDurationPrm,
      easing: "easeOutExpo",
      begin: () => {
        cover.style.transformOrigin = "right";
        if (wordFlash == true) {
          text.style.visibility = "visible";
        }
      },
      scaleX: [1, 0],
      background: "#03a9f4",
    })

    //2
    .add({
      targets: cover,
      duration: startDurationPrm * 0.1,
      easing: "easeInExpo",
      begin: () => {
        cover.style.transformOrigin = "rigit";
        if (wordFlash == true) {
          text.style.visibility = "visible";
        }
      },
      scaleX: [0, 1],
      background: "#03a9f4",
    })
    .add({
      targets: cover,
      duration: endDurationPrm * 0.1,
      easing: "easeOutExpo",
      begin: () => {
        cover.style.transformOrigin = "left";
        if (wordFlash == true) {
          text.style.visibility = "hidden";
        }
      },
      scaleX: [1, 0],
      background: "#03a9f4",
    })

    //3
    .add({
      targets: cover,
      duration: startDurationPrm * 0.1,
      easing: "easeInExpo",
      begin: () => {
        cover.style.transformOrigin = "left";
        if (wordFlash == true) {
          text.style.visibility = "hidden";
        }
      },
      scaleX: [0, 1],
      background: "#03a9f4",
    })
    .add({
      targets: cover,
      duration: endDurationPrm * 0.1,
      easing: "easeOutExpo",
      begin: () => {
        cover.style.transformOrigin = "right";
        if (wordFlash == true) {
          text.style.visibility = "visible";
        }
      },
      scaleX: [1, 0],
      background: "#03a9f4",
    })

    //4
    .add({
      targets: cover,
      duration: startDurationPrm * 0.1,
      easing: "easeInExpo",
      begin: () => {
        cover.style.transformOrigin = "right";
        if (wordFlash == true) {
          text.style.visibility = "visible";
        }
      },
      scaleX: [0, 1],
      background: "#03a9f4",
    })
    .add({
      targets: cover,
      duration: endDurationPrm * 0.1,
      easing: "easeOutExpo",
      begin: () => {
        cover.style.transformOrigin = "left";
        if (wordFlash == true) {
          text.style.visibility = "hidden";
        }
      },
      scaleX: [1, 0],
      background: "#03a9f4",
    })

    //5
    .add({
      targets: cover,
      duration: startDurationPrm * 0.1,
      easing: "easeInExpo",
      begin: () => {
        cover.style.transformOrigin = "left";
        if (wordFlash == true) {
          text.style.visibility = "hidden";
        }
      },
      scaleX: [0, 1],
      background: "#03a9f4",
    })
    .add({
      targets: cover,
      duration: endDurationPrm * 2.5,
      easing: "easeOutExpo",
      begin: () => {
        cover.style.transformOrigin = "right";
        if (wordFlash == true) {
          text.style.visibility = "visible";
        }
      },
      scaleX: [1, 0],
      background: "#03a9f4",
    })

    // //6
    // .add({
    //   targets: cover,
    //   duration: startDurationPrm * 0.1,
    //   easing: "easeInExpo",
    //   begin: () => {
    //     cover.style.transformOrigin = "right";
    //     text.style.visibility = "visible";
    //   },
    //   scaleX: [0, 1],
    //   background: "#03a9f4",
    // })
    // .add({
    //   targets: cover,
    //   duration: endDurationPrm * 0.1,
    //   easing: "easeOutExpo",
    //   begin: () => {
    //     cover.style.transformOrigin = "left";
    //     text.style.visibility = "hidden";
    //   },
    //   scaleX: [1, 0],
    //   background: "#03a9f4",
    // })
    .add({
      begin: function () {
        if (animationLoopFlag == true) {
          anim();
          console.log("run anim loop");
        }
      },
    });
};
anim();
