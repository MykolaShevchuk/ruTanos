
import html2canvas from './vendors/html2canvas.min';

export default function disintegrate($elm) {
  html2canvas($elm).then($canvas => {
    const ctx = $canvas.getContext("2d");
    const { width, height } = $canvas;
    const originalFrame = ctx.getImageData(0, 0, width, height);

    // generate our frames
    const frames = [];
    for (let i = 0; i < 32; ++i) {
      frames[i] = ctx.createImageData(width, height);
    }
    for (let x = 0; x < width; ++x) {
      for (let y = 0; y < height; ++y) {
        for (let l = 0; l < 2; ++l) {
          var frameIndex = Math.floor(32 * (Math.random() + 2 * x / width) / 3);
          var pixelIndex = 4 * (y * width + x);
          for (let channelOffset = 0; 4 > channelOffset; ++channelOffset) {
            frames[frameIndex].data[pixelIndex + channelOffset]
              = originalFrame.data[pixelIndex + channelOffset];
          }
        }
      }
    }

    // generate the container for our frames
    const $container = document.createElement("div");
    $container.classList.add("disintegration-container");
    $container.style.width = `${width}px`;
    $container.style.height = `${height}px`;

    // then generate all the canvas'
    const $frameCanvases = frames.map((frameData, i) => {
      const $c = $canvas.cloneNode(true);
      $c.getContext("2d").putImageData(frameData, 0, 0);
      $c.style.transitionDelay = `${0.8 * i / frames.length}s`;
      $container.appendChild($c);
      return $c;
    });

    // animate the canvas'
    $elm.classList.add("disintegrated");
    $elm.appendChild($container);
    $container.offsetLeft; // forces reflow, so CSS we apply below does transition
    $frameCanvases.forEach($c => {
      const random = 2 * Math.PI * (Math.random() - .5);
      $c.style.transform = `rotate(${15 * (Math.random() - 0.5)}deg) translate(${60 * Math.cos(random)}px, ${30 * Math.sin(random)}px) rotate(${15 * (Math.random() - 0.5)}deg)`;
      $c.style.opacity = 0;
    });
  });
}
