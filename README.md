<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**

- [cover animation](#cover-animation)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->


# cover animation
> <https://qiita.com/SnO2WMaN/items/467c56523a03b5ca4848>

> <https://github.com/2f0833e717/animation/blob/master/animejs/cover-animation/index.html>
```html
<!DOCTYPE html>
<html lang="ja">

<head>
  <meta charset="UTF-8" />
  <title>anime.js-sample</title>
  <link href="style.css" rel="stylesheet">
  </link>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/animejs/2.2.0/anime.min.js"></script>
</head>

<body>
  <div class="wrap">
    <div class="cover"></div>
    <p>ANIMATION</p>
  </div>
  <script src="script.js"></script>
</body>

</html>
```

> <https://github.com/2f0833e717/animation/blob/master/animejs/cover-animation/style.css>
```css
.wrap {
  position: relative;
  padding: 8px;
  /**/ 
  width: 300px;
  height: 80px;
  
}

.wrap > .cover {
  position: absolute;
  z-index: 1;

  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: #03a9f4;
  
}

.wrap > p {
  position: relative;
  z-index: 0;

  font-size: 24px;
  font-family: "Montserrat";
  letter-spacing: 2px;
  color: #1f1f1f;
  
}
```

> <https://github.com/2f0833e717/animation/blob/master/animejs/cover-animation/script.js>
```js
  
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
```