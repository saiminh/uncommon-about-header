  window.addEventListener('DOMContentLoaded', () => {
    if ( motion ) {
      const container = document.querySelector( '.uncommon-about-header' );
      container.innerHTML = container.innerHTML + container.innerHTML;
      document.body.classList.add( 'dom-loaded' );
      const images = document.querySelectorAll( '.uncommon-about-header figure' ),
            imageWidth = images[0].getBoundingClientRect().width,
            windowWidth = window.innerWidth,
            windowHeight = window.innerHeight,
            fullAnimationLoopDuration = 10,
            animdelay = fullAnimationLoopDuration / images.length;
      
      images.forEach( (image, index) => {
        if (index == images.length - 1) {
          image.style.zIndex = 0;
        } else {
          image.style.zIndex = images.length - index;
        }
        image.style.opacity = 1;
        motion.animate( image, 
          { 
            x: [ `${windowWidth}px`, `-${imageWidth * 1.5}px` ], 
            y: [ `${windowHeight * 0.3}px`, `${windowHeight * 0.4}px`, `${windowHeight * 0.2}px`, `-${0.5 * imageWidth}px` ],
            scale: [ 0.5, 1, 0.5 ], 
            rotate: ['-15deg', '0deg', '8deg', '18deg', '30deg', '50deg', '70deg' ],
            zIndex: [ 0, 100 ]
          }, 
          { 
            delay: animdelay * index, 
            duration: fullAnimationLoopDuration, 
            repeat: Infinity
          }, 
        );
        // motion.animate( (progress) => {
        //   image.style.zIndex = 100 * progress;
        // }, {
        //   delay: animdelay * index, 
        //   duration: fullAnimationLoopDuration, 
        //   repeat: Infinity
        // })
      })
    } 
    else {
      console.log(
        'motion not found, this plugin uses motion as a dependency that has to be in the global scope as many plugins will use it'
      );
    }
  })

  window.addEventListener('load', () => {
    document.body.classList.add( 'content-loaded' );
  })