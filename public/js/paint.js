class AstroPaintBg {
    // static get inputProperties() { return ['--color-for-bg']; }
    // static get inputArguments() { return ['*','<color>']; }

    static get inputProperties() {
        return ["--color-for-bg"];
    }

    paint(ctx, size, props) {
        const fillColor = props.get("--color-for-bg");
        ctx.fillStyle = fillColor;

        ctx.rect(0, 0, size.width, size.height);
        ctx.fill();
        ctx.beginPath();

        // var startX = 10;
        // var startY = 0;
        // var zigzagSpacing = 6;

        // ctx.lineWidth = 3;
        // ctx.strokeStyle = "#f00";
        // // draw seven lines
        // for (var n = 0; n < 50; n++) {
        // 	var y = startY + ((n + 1) * zigzagSpacing);
        // 	var x;

        // 	if (n % 2 == 0) { // if n is even...
        // 		x = startX + 100;
        // 	}
        // 	else { // if n is odd...
        // 		x = startX + 0;
        // 	}
        // 	ctx.lineTo(x, y);
        // }
        // ctx.stroke();
    }
}

registerPaint("astro", AstroPaintBg);

class CheckerboardPainter {
    paint(ctx, geom, properties) {
        // Use `ctx` as if it was a normal canvas
        const colors = ["red", "green", "blue"];
        const size = 32;
        for (let y = 0; y < geom.height / size; y++) {
            for (let x = 0; x < geom.width / size; x++) {
                const color = colors[(x + y) % colors.length];
                ctx.beginPath();
                ctx.fillStyle = color;
                ctx.rect(x * size, y * size, size, size);
                ctx.fill();
            }
        }
    }
}

// Register our class under a specific name
registerPaint("checkerboard", CheckerboardPainter);
