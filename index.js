/* <a-cone color="#EF2D5E" scale="0.3 2 0.3" rotation="59.99999999999999 0 90"
          material="" radius-bottom="0.5" radius-top="0.2"
          add-element-to-ship geometry="radiusBottom: 0.74; radiusTop: 0.01; segmentsRadial: 5" position="0 0.02224 0">
        </a-cone> */

        AFRAME.registerComponent('first-loading-screen', {
          init: function () {
              var el = this.el;  // <a-box>

              el.addEventListener('click', function () {
                el.remove();  
              });
          }
      });

      AFRAME.registerComponent('second-loading-screen', {
        init: function () {
            var el = this.el;  // <a-box>
    
            el.addEventListener('click', function () {
              el.remove();  
            });
        }
    });

    AFRAME.registerComponent('third-loading-screen', {
      init: function () {
          var el = this.el;  // <a-box>
  
          el.addEventListener('click', function () {
            el.remove();  
          });
      }
  });

  AFRAME.registerComponent('win-screen', {
    init: function () {
        var el = this.el;  // <a-box>

        el.addEventListener('click', function () {
          
          document.querySelector('#winTime').setAttribute('value', (seconds.toString() + ' ms'))
        });
    }
});