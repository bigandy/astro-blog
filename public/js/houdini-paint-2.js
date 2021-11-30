class ZigzagPainter {
  static get inputProperties() {
    return [
      "--color-1",
      "--color-2",
      "--height",
      "--diff",
      "--width-1",
      "--width-2",
    ];
  }

  paint(ctx, geom, properties) {
    let colors = ["red", "blue"];

    let zigZagHeight = 100;
    let diff = 30;
    let width1 = 1;
    let width2 = 10;
    if (properties.get("--color-1").length > 0) {
      colors[0] = properties.get("--color-1");
    }
    if (properties.get("--color-2").length > 0) {
      colors[1] = properties.get("--color-2");
    }
    if (properties.get("--diff").length > 0) {
      diff = parseInt(properties.get("--diff"));
    }
    if (properties.get("--height").length > 0) {
      zigZagHeight = parseInt(properties.get("--height"));
    }
    if (properties.get("--width-1").length > 0) {
      width1 = parseInt(properties.get("--width-1"));
    }
    if (properties.get("--width-2").length > 0) {
      width2 = parseInt(properties.get("--width-2"));
    }

    // Draw the zigzags
    const { height, width } = geom;
    for (let j = 1; j <= height / zigZagHeight; j++) {
      let top = j * zigZagHeight - zigZagHeight;
      ctx.beginPath();
      ctx.moveTo(0, top);
      for (let i = 0; i <= width / (diff * 2); i++) {
        const down = diff + i * diff * 2;
        const up = diff + diff + i * diff * 2;
        ctx.lineTo(down, zigZagHeight * j);
        ctx.lineTo(up, top);
      }
      ctx.lineCap = "round";
      ctx.lineWidth = j % 2 === 0 ? width1 : width2;
      ctx.strokeStyle = j % 2 === 0 ? colors[0] : colors[1];
      ctx.stroke();
      ctx.beginPath();
    }
  }
}

// Register our class under a specific name
registerPaint("zigzag", ZigzagPainter);
