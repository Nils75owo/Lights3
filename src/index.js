var can = document.createElement("canvas");
var ctx = can.getContext("2d");
document.body.appendChild(can);
var speed = 30;
var particles = [];
var mouse = { x: 0, y: 0 };
var colors = [
    "#00bdff",
    "#4d39ce",
    "#088eff"
];
var Particle = /** @class */ (function () {
    function Particle(x, y, oRadius, color, velocity) {
        var _this = this;
        if (oRadius === void 0) { oRadius = 10; }
        if (color === void 0) { color = 0; }
        if (velocity === void 0) { velocity = 0.05; }
        this.bx = null;
        this.by = null;
        this.x = null;
        this.y = null;
        this.oRadius = null;
        this.color = null;
        this.velocity = null;
        this.radius = null;
        this.radians = Math.random() * Math.PI * 2;
        this.lastMouse = null;
        this.c = null;
        this.update = function () {
            var lastPoint = [_this.x, _this.y];
            _this.lastMouse["x"] += (mouse["x"] - _this.lastMouse["x"]) * 0.05;
            _this.lastMouse["y"] += (mouse["y"] - _this.lastMouse["y"]) * 0.05;
            _this.x = _this.lastMouse["x"];
            _this.y = _this.lastMouse["y"];
            _this.draw(lastPoint);
        };
        this.draw = function (lastPoint) {
            ctx.beginPath();
            if (typeof _this.color === "string")
                ctx.strokeStyle = _this.color;
            else {
                ctx.strokeStyle = "hsl(" + _this.color + ", 100%, 60%)";
                _this.color += 1;
            }
            ctx.lineWidth = _this.oRadius;
            ctx.moveTo(lastPoint[0], lastPoint[1]);
            ctx.lineTo(_this.x, _this.y);
            ctx.stroke();
            ctx.closePath();
        };
        this.bx = x;
        this.by = y;
        this.oRadius = oRadius;
        if (typeof color == "string")
            this.color = color;
        else
            this.color = color;
        this.velocity = velocity;
        this.lastMouse = { x: this.x, y: this.y };
    }
    return Particle;
}());
var animate = function () {
    requestAnimationFrame(animate);
    //ctx.clearRect(0,0,can.width,can.height);
    ctx.fillStyle = "rgba(0,0,0, 0.05)";
    ctx.fillRect(0, 0, can.width, can.height);
    particles.forEach(function (particle) {
        particle.update();
    });
};
for (var i = 0; i < 1; i++) {
    particles.push(new Particle(window.innerWidth / 2, window.innerHeight / 2, 15, 0));
}
var redrawCan = function () {
    can.width = window.innerWidth;
    can.height = window.innerHeight;
    ctx.fillStyle = "rgba(0,0,0,255)";
    ctx.fillRect(0, 0, can.width, can.height);
};
redrawCan();
animate();
window.addEventListener("resize", redrawCan);
document.addEventListener("mousemove", function (evt) {
    mouse = { x: evt.x, y: evt.y };
});
