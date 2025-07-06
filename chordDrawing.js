function drawChord(x, y, positions, colors, pos, val, name, p) {
  const canvas = document.getElementById(p);
  const ctx = canvas.getContext('2d');
  const stringSpacing = 16;
  const fretSpacing = 25;

  ctx.fillStyle = 'black';
  ctx.font = '15px Arial';
  ctx.fillText(name, x + ((stringSpacing * 5) / 2) - (name.length * 4.5), y - 20);

  if(pos > 0 ){
    ctx.font = '12px Arial';
    if(val < 10){
      ctx.fillText(val, x - 15, y + (fretSpacing * pos - 7));
    }else{
      ctx.fillText(val, x - 25, y + (fretSpacing * pos - 7));
    }
  }
  // Dibujar líneas de cuerdas
  for (let i = 0; i < 6; i++) {
    ctx.beginPath();
    ctx.moveTo(x + i * stringSpacing, y);
    ctx.lineTo(x + i * stringSpacing, y + 5 * fretSpacing);
    ctx.stroke();
  }

  // Dibujar trastes
  for (let i = 0; i < 6; i++) {
    ctx.beginPath();
    ctx.moveTo(x, y + i * fretSpacing);
    ctx.lineTo(x + 5 * stringSpacing, y + i * fretSpacing);
    ctx.stroke();
  }

  // Dibujar posiciones de dedos
  positions.forEach((pos, string) => {
      switch (colors[string]) {
        case 1://red
          ctx.fillStyle = 'RGB(206 26 20)';
          ctx.strokeStyle = 'RGB(206 26 20)';
          break;
        case 3://green
          ctx.fillStyle = 'rgb(63,127,7)';
          ctx.strokeStyle = 'rgb(63,127,7)';
          break;
        case 5://blue
          ctx.fillStyle = 'rgb(5,109,162)';
          ctx.strokeStyle = 'rgb(5,109,162)';
          break;
        case 7: //yellow
          ctx.fillStyle = 'rgb(220,174,29)';
          ctx.strokeStyle = 'rgb(220,174,29)';
          break;
        case 9://orange
          ctx.fillStyle = 'RGB(81 10 92)';
          ctx.strokeStyle = 'RGB(81 10 92)';
          break;
        case 11:
          ctx.fillStyle = 'RGB(81 10 92)';
          ctx.strokeStyle = 'RGB(81 10 92)';
          break;
        case 13:
          ctx.fillStyle = 'RGB(81 10 92)';
          ctx.strokeStyle = 'RGB(81 10 92)';
          break;
        default:
          ctx.strokeStyle = 'gray';
          ctx.strokeStyle = 'gray';
          break;
      }

    if (pos > 0) {
      ctx.beginPath();
      ctx.arc(x + string * stringSpacing, y + pos * fretSpacing - fretSpacing / 2, 6, 0, Math.PI * 2);
      ctx.fill();
    } else if (pos === 0) {
      ctx.beginPath();
      ctx.arc(x + string * stringSpacing, y - fretSpacing / 2, 5.7, 0, Math.PI * 2);
      ctx.stroke();
    }
    ctx.strokeStyle = 'black';
  });
}
