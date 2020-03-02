let configCylinder = {
    name: 'cylinder-block-component',
    nameId: '#CylinderBlockComponent',
    nameCopy: 'copy-cylinder-block-component',
    nameCopyId: '#CylinderBlockComponentToCopy',
    properColor: 'grey',
    hoverColor: 'lightblue',
    transparentColor: '#EF2D5E',
    material: 'side: double; transparent: false; opacity: 1'
}

AFRAME.registerComponent(configCylinder.name, {
    init: function () {
        var el = this.el;  // <a-box>
        el.addEventListener('mouseenter', function () {
            let color = el.getAttribute('color');

            if (color !== configCylinder.properColor) {
                el.setAttribute('color', configCylinder.hoverColor);
                let greycylinder = document.querySelectorAll('.grey-cylinder-block');
                document.querySelector('.lightblue-cylinder-block').setAttribute('color', configCylinder.transparentColor);
                for (let i = 0; i < greycylinder.length; i++) {
                    greycylinder[i].setAttribute('color', configCylinder.transparentColor)
                  }
            }
        })

        el.addEventListener('mouseleave', function () {
            let color = el.getAttribute('color');
            if (color !== configCylinder.properColor) {
                el.setAttribute('color', configCylinder.transparentColor);
                let greycylinder = document.querySelectorAll('.grey-cylinder-block');
                document.querySelector('.lightblue-cylinder-block').setAttribute('color', configCylinder.transparentColor);
                for (let i = 0; i < greycylinder.length; i++) {
                    greycylinder[i].setAttribute('color', configCylinder.transparentColor)
                  }
            }
        })

        el.addEventListener('click', function () {
            if(document.querySelector(configCylinder.nameId) == null){return;}

            let color = el.getAttribute('color');
            let scoreText = document.querySelector('#score');
            let notThisBlock = document.querySelector('#notThisBlock');
            let notThisBlockAbox = document.querySelector('#notThisBlockAbox');

            notThisBlock.setAttribute('value', 'No Error');
            notThisBlock.removeAttribute('animation__2');
            notThisBlock.removeAttribute('animation__3');
            notThisBlock.removeAttribute('animation__4');
            notThisBlockAbox.removeAttribute('animation__1');

            if (document.querySelector(configCylinder.nameId).getAttribute('visible') === true) {
                document.querySelector(configCylinder.nameId).remove();
                if (color !== configCylinder.properColor) {
                    score++
                    scoreText.setAttribute('value', score.toString());
                    el.setAttribute('color', configCylinder.properColor);
                    el.setAttribute('material', configCylinder.material);
                    let greycylinder = document.querySelectorAll('.grey-cylinder-block');
                document.querySelector('.lightblue-cylinder-block').setAttribute('material', configCylinder.material);
                document.querySelector('.lightblue-cylinder-block').setAttribute('color', 'lightblue');
                for (let i = 0; i < greycylinder.length; i++) {
                    
                    greycylinder[i].setAttribute('material', configCylinder.material)
                    greycylinder[i].setAttribute('color', 'grey')
                    

                  }
                }
            } else {
                notThisBlock.setAttribute('value', '#!#Error#!#');
                notThisBlock.setAttribute('animation__2', 'property: object3D.scale.x; to: 0.4; dir: alternate; dur: 500; loop: 4');
                notThisBlock.setAttribute('animation__3', 'property: object3D.scale.y; to: 0.4; dir: alternate; dur: 500; loop: 4');
                notThisBlock.setAttribute('animation__4', 'property: object3D.scale.z; to: 0.4; dir: alternate; dur: 500; loop: 4');
                notThisBlockAbox.setAttribute('animation__1', 'property: material.color; from: #FFF; to: #F00; dir: alternate; dur: 500; loop: 4');
            }
            start();

            if (score === 6) {
                console.log("win")
                end();
                console.log(seconds)
            }
        });
    }
});

AFRAME.registerComponent(configCylinder.nameCopy, {

    init: function () {

        var el = this.el;  // <a-box>

        el.addEventListener('mouseenter', function () {
            let color = el.getAttribute('color');

            if (color !== configCylinder.properColor) {
                el.setAttribute('color', configCylinder.hoverColor);
            }
        })

        el.addEventListener('mouseleave', function () {
            let color = el.getAttribute('color');
            if (color !== configCylinder.properColor) {
                el.setAttribute('color', configCylinder.transparentColor);
            }
        })

        el.addEventListener('click', function () {
            document.querySelector(configCylinder.nameId).setAttribute('visible', 'true');
            document.querySelector(configCylinder.nameCopyId).remove();
        });
    }
});