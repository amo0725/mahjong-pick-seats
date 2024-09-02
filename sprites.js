document.addEventListener("DOMContentLoaded", function () {
  const svgSprite = `
  <svg xmlns="http://www.w3.org/2000/svg" style="display: none">
    <symbol id="card-east" viewBox="0 0 480 720">
      <rect x="60" y="60" rx="60" ry="60" width="400" height="600" fill="green" />
      <rect x="0" y="0" rx="60" ry="60" width="400" height="600" fill="white" stroke="black" stroke-width="8" />
      <rect x="28" y="28" rx="60" ry="60" width="400" height="600" fill="white" opacity="0.5" />
      <text x="200" y="360" font-size="240" text-anchor="middle" fill="blue" font-family="sans-serif">東</text>
    </symbol>
    <symbol id="card-south" viewBox="0 0 480 720">
      <rect x="60" y="60" rx="60" ry="60" width="400" height="600" fill="green" />
      <rect x="0" y="0" rx="60" ry="60" width="400" height="600" fill="white" stroke="black" stroke-width="8" />
      <rect x="28" y="28" rx="60" ry="60" width="400" height="600" fill="white" opacity="0.5" />
      <text x="200" y="360" font-size="240" text-anchor="middle" fill="blue" font-family="sans-serif">南</text>
    </symbol>
    <symbol id="card-west" viewBox="0 0 480 720">
      <rect x="60" y="60" rx="60" ry="60" width="400" height="600" fill="green" />
      <rect x="0" y="0" rx="60" ry="60" width="400" height="600" fill="white" stroke="black" stroke-width="8" />
      <rect x="28" y="28" rx="60" ry="60" width="400" height="600" fill="white" opacity="0.5" />
      <text x="200" y="360" font-size="240" text-anchor="middle" fill="blue" font-family="sans-serif">西</text>
    </symbol>
    <symbol id="card-north" viewBox="0 0 480 720">
      <rect x="60" y="60" rx="60" ry="60" width="400" height="600" fill="green" />
      <rect x="0" y="0" rx="60" ry="60" width="400" height="600" fill="white" stroke="black" stroke-width="8" />
      <rect x="28" y="28" rx="60" ry="60" width="400" height="600" fill="white" opacity="0.5" />
      <text x="200" y="360" font-size="240" text-anchor="middle" fill="blue" font-family="sans-serif">北</text>
    </symbol>
  </svg>
  `;
  document.body.insertAdjacentHTML("afterbegin", svgSprite);
});
