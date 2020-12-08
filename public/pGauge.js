/********************************************************************************************
Matt Gauge JS
  *********************************************************************************************/
  var Gauge = function (b) {
    function l(a, b) {
        for (var c in b) "object" == typeof b[c] && "[object Array]" !== Object.prototype.toString.call(b[c]) && "renderTo" != c ? ("object" != typeof a[c] && (a[c] = {}), l(a[c], b[c])) : (a[c] = b[c]);
    }
    function q() {
        z.width = b.width;
        z.height = b.height;
        A = z.cloneNode(!0);
        B = A.getContext("2d");
        C = z.width;
        D = z.height;
        t = C / 2;
        u = D / 2;
        f = t < u ? t : u;
        A.i8d = !1;
        B.translate(t, u);
        B.save();
        a.translate(t, u);
        a.save();
    }
    function v(a) {
        var b = new Date();
        G = setInterval(function () {
            var c = (new Date() - b) / a.duration;
            1 < c && (c = 1);
            var f = ("function" == typeof a.delta ? a.delta : M[a.delta])(c);
            a.step(f);
            1 == c && clearInterval(G);
        }, a.delay || 10);
    }
    function k() {
        G && clearInterval(G);
        var a = I - p,
            h = p,
            c = b.animation;
        v({
            delay: c.delay,
            duration: c.duration,
            delta: c.fn,
            step: function (b) {
                p = parseFloat(h) + a * b;
                E.draw();
            },
        });
    }
    function e(a) {
        return (a * Math.PI) / 180;
    }
    function g(b, h, c) {
        c = a.createLinearGradient(0, 0, 0, c);
        c.addColorStop(0, b);
        c.addColorStop(1, h);
        return c;
    }
    function n() {
        var m = 93 * (f / 100),
            h = f - m,
            c = 91 * (f / 100),
            e = 88 * (f / 100),
            d = 85 * (f / 100);
        a.save();
        b.glow && ((a.shadowBlur = h), (a.shadowColor = "rgba(0, 0, 0, 0.5)"));
        a.beginPath();
        a.arc(0, 0, m, 0, 2 * Math.PI, !0);
        a.fillStyle = g("#ddd", "#aaa", m);
        a.fill();
        a.restore();
        a.beginPath();
        a.arc(0, 0, c, 0, 2 * Math.PI, !0);
        a.fillStyle = g("#fafafa", "#ccc", c);
        a.fill();
        a.beginPath();
        a.arc(0, 0, e, 0, 2 * Math.PI, !0);
        a.fillStyle = g("#eee", "#f0f0f0", e);
        a.fill();
        a.beginPath();
        a.arc(0, 0, d, 0, 2 * Math.PI, !0);
        a.fillStyle = b.colors.plate;
        a.fill();
        a.save();
    }
    function w(a) {
        var h = !1;
        a = 0 === b.majorTicksFormat.dec ? Math.round(a).toString() : a.toFixed(b.majorTicksFormat.dec);
        return 1 < b.majorTicksFormat["int"]
            ? ((h = -1 < a.indexOf(".")),
              -1 < a.indexOf("-") ? "-" + (b.majorTicksFormat["int"] + b.majorTicksFormat.dec + 2 + (h ? 1 : 0) - a.length) + a.replace("-", "") : "" + (b.majorTicksFormat["int"] + b.majorTicksFormat.dec + 1 + (h ? 1 : 0) - a.length) + a)
            : a;
    }
    function d() {
        var m = 81 * (f / 100);
        a.lineWidth = 2;
        a.strokeStyle = b.colors.majorTicks;
        a.save();
        if (0 === b.majorTicks.length) {
            for (var h = (b.maxValue - b.minValue) / 5, c = 0; 5 > c; c++) b.majorTicks.push(w(b.minValue + h * c));
            b.majorTicks.push(w(b.maxValue));
        }
        for (c = 0; c < b.majorTicks.length; ++c) a.rotate(e(45 + c * (270 / (b.majorTicks.length - 1)))), a.beginPath(), a.moveTo(0, m), a.lineTo(0, m - 15 * (f / 100)), a.stroke(), a.restore(), a.save();
        b.strokeTicks && (a.rotate(e(90)), a.beginPath(), a.arc(0, 0, m, e(45), e(315), !1), a.stroke(), a.restore(), a.save());
    }
    function J() {
        var m = 81 * (f / 100);
        a.lineWidth = 1;
        a.strokeStyle = b.colors.minorTicks;
        a.save();
        for (var h = b.minorTicks * (b.majorTicks.length - 1), c = 0; c < h; ++c) a.rotate(e(45 + c * (270 / h))), a.beginPath(), a.moveTo(0, m), a.lineTo(0, m - 7.5 * (f / 100)), a.stroke(), a.restore(), a.save();
    }
    function s() {
        for (var m = 55 * (f / 100), h = 0; h < b.majorTicks.length; ++h) {
            var c = F(m, e(45 + h * (270 / (b.majorTicks.length - 1))));
            a.font = 20 * (f / 200) + "px Arial";
            a.fillStyle = b.colors.numbers;
            a.lineWidth = 0;
            a.textAlign = "center";
            a.fillText(b.majorTicks[h], c.x, c.y + 3);
        }
    }
    function x(a) {
        // digital value 
        var h = b.valueFormat.dec,
            c = b.valueFormat["int"];
        a = parseFloat(a);
        var f = 0 > a;
        a = Math.abs(a);
        if (0 < h) {
            a = a.toFixed(h).toString().split(".");
            h = 0;
            for (c -= a[0].length; h < c; ++h) a[0] = "0" + a[0];
            a = (f ? "-" : "") + a[0] + "." + a[1];
        } else {
            a = Math.round(a).toString();
            h = 0;
            for (c -= a.length; h < c; ++h) a = "0" + a;
            a = (f ? "-" : "") + a;
        }
        return 27.03; //a
    }
    function F(a, b) {
        var c = Math.sin(b),
            f = Math.cos(b);
        return { x: 0 * f - a * c, y: 0 * c + a * f };
    }
    function N() {
        a.save();
        for (var m = 81 * (f / 100), h = m - 15 * (f / 100), c = 0, g = b.highlights.length; c < g; c++) {
            var d = b.highlights[c],
                r = (b.maxValue - b.minValue) / 270,
                k = e(45 + (d.from - b.minValue) / r),
                r = e(45 + (d.to - b.minValue) / r);
            a.beginPath();
            a.rotate(e(90));
            a.arc(0, 0, m, k, r, !1);
            a.restore();
            a.save();
            var l = F(h, k),
                n = F(m, k);
            a.moveTo(l.x, l.y);
            a.lineTo(n.x, n.y);
            var n = F(m, r),
                p = F(h, r);
            a.lineTo(n.x, n.y);
            a.lineTo(p.x, p.y);
            a.lineTo(l.x, l.y);
            a.closePath();
            a.fillStyle = d.color;
            a.fill();
            a.beginPath();
            a.rotate(e(90));
            a.arc(0, 0, h, k - 0.2, r + 0.2, !1);
            a.restore();
            a.closePath();
            a.fillStyle = b.colors.plate;
            a.fill();
            a.save();
        }
    }
    function K() {
        var m = 12 * (f / 100),
            h = 8 * (f / 100),
            c = 77 * (f / 100),
            d = 20 * (f / 100),
            k = 4 * (f / 100),
            r = 2 * (f / 100),
            n = function () {
                a.shadowOffsetX = 2;
                a.shadowOffsetY = 2;
                a.shadowBlur = 10;
                a.shadowColor = "rgba(188, 143, 143, 0.45)";
            };
        n();
        a.save();
        p = 0 > p ? Math.abs(b.minValue - p) : 0 < b.minValue ? p - b.minValue : Math.abs(b.minValue) + p;
        a.rotate(e(45 + p / ((b.maxValue - b.minValue) / 270)));
        a.beginPath();
        a.moveTo(-r, -d);
        a.lineTo(-k, 0);
        a.lineTo(-1, c);
        a.lineTo(1, c);
        a.lineTo(k, 0);
        a.lineTo(r, -d);
        a.closePath();
        a.fillStyle = g(b.colors.needle.start, b.colors.needle.end, c - d);
        a.fill();
        a.beginPath();
        a.lineTo(-0.5, c);
        a.lineTo(-1, c);
        a.lineTo(-k, 0);
        a.lineTo(-r, -d);
        a.lineTo(r / 2 - 2, -d);
        a.closePath();
        a.fillStyle = "rgba(255, 255, 255, 0.2)";
        a.fill();
        a.restore();
        n();
        a.beginPath();
        a.arc(0, 0, m, 0, 2 * Math.PI, !0);
        a.fillStyle = g("#f0f0f0", "#ccc", m);
        a.fill();
        a.restore();
        a.beginPath();
        a.arc(0, 0, h, 0, 2 * Math.PI, !0);
        a.fillStyle = g("#e8e8e8", "#f5f5f5", h);
        a.fill();
    }
    function L() {
        a.save();
        a.font = 40 * (f / 200) + "px Led";
        var b = x(y),
            h = a.measureText("-" + x(0)).width,
            c = f - 33 * (f / 100),
            g = 0.12 * f;
        a.save();
        var d = -h / 2 - 0.025 * f,
            e = c - g - 0.04 * f,
            h = h + 0.05 * f,
            g = g + 0.07 * f,
            k = 0.025 * f;
        a.beginPath();
        a.moveTo(d + k, e);
        a.lineTo(d + h - k, e);
        a.quadraticCurveTo(d + h, e, d + h, e + k);
        a.lineTo(d + h, e + g - k);
        a.quadraticCurveTo(d + h, e + g, d + h - k, e + g);
        a.lineTo(d + k, e + g);
        a.quadraticCurveTo(d, e + g, d, e + g - k);
        a.lineTo(d, e + k);
        a.quadraticCurveTo(d, e, d + k, e);
        a.closePath();
        d = a.createRadialGradient(0, c - 0.12 * f - 0.025 * f + (0.12 * f + 0.045 * f) / 2, f / 10, 0, c - 0.12 * f - 0.025 * f + (0.12 * f + 0.045 * f) / 2, f / 5);
        d.addColorStop(0, "#888");
        d.addColorStop(1, "#666");
        a.strokeStyle = d;
        a.lineWidth = 0.05 * f;
        a.stroke();
        a.shadowBlur = 0.012 * f;
        a.shadowColor = "rgba(0, 0, 0, 1)";
        a.fillStyle = "#babab2";
        a.fill();
        a.restore();
        a.shadowOffsetX = 0.004 * f;
        a.shadowOffsetY = 0.004 * f;
        a.shadowBlur = 0.012 * f;
        a.shadowColor = "rgba(0, 0, 0, 0.3)";
        a.fillStyle = "#444";
        a.textAlign = "center";
        a.fillText(b, -0, c);
        a.restore();
    }
    Gauge.Collection.push(this);
    this.config = {
        renderTo: null,
        width: 200,
        height: 200,
        title: !1,
        maxValue: 100,
        minValue: 0,
        majorTicks: [],
        minorTicks: 10,
        strokeTicks: !0,
        units: !1,
        valueFormat: { int: 3, dec: 2 },
        majorTicksFormat: { int: 1, dec: 0 },
        glow: !0,
        animation: { delay: 10, duration: 250, fn: "cycle" },
        colors: { plate: "#fff", majorTicks: "#444", minorTicks: "#666", title: "#888", units: "#888", numbers: "#444", needle: { start: "rgba(240, 128, 128, 1)", end: "rgba(255, 160, 122, .9)" } },
        highlights: [
            { from: 20, to: 60, color: "#eee" },
            { from: 60, to: 80, color: "#ccc" },
            { from: 80, to: 100, color: "#999" },
        ],
    };
    var y = 0,
        E = this,
        p = 0,
        I = 0,
        H = !1;
    this.setValue = function (a) {
        p = b.animation ? y : a;
        var d = (b.maxValue - b.minValue) / 100;
        I = a > b.maxValue ? b.maxValue + d : a < b.minValue ? b.minValue - d : a;
        y = a;
        b.animation ? k() : this.draw();
        return this;
    };
    this.setRawValue = function (a) {
        p = y = a;
        this.draw();
        return this;
    };
    this.clear = function () {
        y = p = I = this.config.minValue;
        this.draw();
        return this;
    };
    this.getValue = function () {
        return y;
    };
    this.onready = function () {};
    l(this.config, b);
    this.config.minValue = parseFloat(this.config.minValue);
    this.config.maxValue = parseFloat(this.config.maxValue);
    b = this.config;
    p = y = b.minValue;
    if (!b.renderTo) throw Error("Canvas element was not specified when creating the Gauge object!");
    var z = b.renderTo.tagName ? b.renderTo : document.getElementById(b.renderTo),
        a = z.getContext("2d"),
        A,
        C,
        D,
        t,
        u,
        f,
        B;
    q();
    this.updateConfig = function (a) {
        l(this.config, a);
        q();
        this.draw();
        return this;
    };
    var M = {
            linear: function (a) {
                return a;
            },
            quad: function (a) {
                return Math.pow(a, 2);
            },
            quint: function (a) {
                return Math.pow(a, 5);
            },
            cycle: function (a) {
                return 1 - Math.sin(Math.acos(a));
            },
            bounce: function (a) {
                a: {
                    a = 1 - a;
                    for (var b = 0, c = 1; ; b += c, c /= 2)
                        if (a >= (7 - 4 * b) / 11) {
                            a = -Math.pow((11 - 6 * b - 11 * a) / 4, 2) + Math.pow(c, 2);
                            break a;
                        }
                    a = void 0;
                }
                return 1 - a;
            },
            elastic: function (a) {
                a = 1 - a;
                return 1 - Math.pow(2, 10 * (a - 1)) * Math.cos(((30 * Math.PI) / 3) * a);
            },
        },
        G = null;
    a.lineCap = "round";
    this.draw = function () {
        if (!A.i8d) {
            B.clearRect(-t, -u, C, D);
            B.save();
            var g = { ctx: a };
            a = B;
            n();
            N();
            J();
            d();
            s();
            b.title && (a.save(), (a.font = 24 * (f / 200) + "px Arial"), (a.fillStyle = b.colors.title), (a.textAlign = "center"), a.fillText(b.title, 0, -f / 4.25), a.restore());
            b.units && (a.save(), (a.font = 22 * (f / 200) + "px Arial"), (a.fillStyle = b.colors.units), (a.textAlign = "center"), a.fillText(b.units, 0, f / 3.25), a.restore());
            A.i8d = !0;
            a = g.ctx;
            delete g.ctx;
        }
        a.clearRect(-t, -u, C, D);
        a.save();
        a.drawImage(A, -t, -u, C, D);
        if (Gauge.initialized) L(), K(), H || (E.onready && E.onready(), (H = !0));
        else
            var e = setInterval(function () {
                Gauge.initialized && (clearInterval(e), L(), K(), H || (E.onready && E.onready(), (H = !0)));
            }, 10);
        return this;
    };
};
Gauge.initialized = !1;
(function () {
    var b = document,
        l = b.getElementsByTagName("head")[0],
        q = -1 != navigator.userAgent.toLocaleLowerCase().indexOf("msie"),
        v = "@font-face {font-family: 'Led';src: url('https://smart-ip.net/styles/fonts/digital-7-mono." + (q ? "eot" : "ttf") + "');}",
        k = b.createElement("style");
    k.type = "text/css";
    if (q) l.appendChild(k), (l = k.styleSheet), (l.cssText = v);
    else {
        try {
            k.appendChild(b.createTextNode(v));
        } catch (e) {
            k.cssText = v;
        }
        l.appendChild(k);
        l = k.styleSheet ? k.styleSheet : k.sheet || b.styleSheets[b.styleSheets.length - 1];
    }
    var g = setInterval(function () {
        if (b.body) {
            clearInterval(g);
            var e = b.createElement("div");
            e.style.fontFamily = "Led";
            e.style.position = "absolute";
            e.style.height = e.style.width = 0;
            e.style.overflow = "hidden";
            e.innerHTML = ".";
            b.body.appendChild(e);
            setTimeout(function () {
                Gauge.initialized = !0;
                e.parentNode.removeChild(e);
            }, 250);
        }
    }, 1);
})();
Gauge.Collection = [];
Gauge.Collection.get = function (b) {
    if ("string" == typeof b)
        for (var l = 0, q = this.length; l < q; l++) {
            if (this[l].config.renderTo.getAttribute("id") == b) return this[l];
        }
    else return "number" == typeof b ? this[b] : null;
};
function domReady(b) {
    window.addEventListener ? window.addEventListener("DOMContentLoaded", b, !1) : window.attachEvent("onload", b);
}
domReady(function () {
    function b(b) {
        for (var e = b[0], d = 1, g = b.length; d < g; d++) e += b[d].substr(0, 1).toUpperCase() + b[d].substr(1, b[d].length - 1);
        return e;
    }
    for (var l = document.getElementsByTagName("canvas"), q = 0, v = l.length; q < v; q++)
        if ("canv-gauge" == l[q].getAttribute("data-type")) {
            var k = l[q],
                e = {},
                g,
                n = parseInt(k.getAttribute("width"), 10),
                w = parseInt(k.getAttribute("height"), 10);
            e.renderTo = k;
            n && (e.width = n);
            w && (e.height = w);
            n = 0;
            for (w = k.attributes.length; n < w; n++)
                if (((g = k.attributes.item(n).nodeName), "data-type" != g && "data-" == g.substr(0, 5))) {
                    var d = g
                        .substr(5, g.length - 5)
                        .toLowerCase()
                        .split("-");
                    if ((g = k.getAttribute(g)))
                        switch (d[0]) {
                            case "colors":
                                d[1] && (e.colors || (e.colors = {}), "needle" == d[1] ? ((d = g.split(/\s+/)), (e.colors.needle = d[0] && d[1] ? { start: d[0], end: d[1] } : g)) : (d.shift(), (e.colors[b(d)] = g)));
                                break;
                            case "highlights":
                                e.highlights || (e.highlights = []);
                                g = g.split(",");
                                for (var d = 0, J = g.length; d < J; d++) {
                                    var s = g[d].replace(/^\s+|\s+$/g, "").split(/\s+/),
                                        x = {};
                                    s[0] && "" != s[0] && (x.from = s[0]);
                                    s[1] && "" != s[1] && (x.to = s[1]);
                                    s[2] && "" != s[2] && (x.color = s[2]);
                                    e.highlights.push(x);
                                }
                                break;
                            case "animation":
                                d[1] && (e.animation || (e.animation = {}), "fn" == d[1] && /^\s*function\s*\(/.test(g) && (g = eval("(" + g + ")")), (e.animation[d[1]] = g));
                                break;
                            default:
                                d = b(d);
                                if ("onready" == d) continue;
                                if ("majorTicks" == d) g = g.split(/\s+/);
                                else if ("strokeTicks" == d || "glow" == d) g = "true" == g ? !0 : !1;
                                else if ("valueFormat" == d)
                                    if (((g = g.split(".")), 2 == g.length)) g = { int: parseInt(g[0], 10), dec: parseInt(g[1], 10) };
                                    else continue;
                                e[d] = g;
                        }
                }
            e = new Gauge(e);
            
            k.getAttribute("data-value") && e.setRawValue(parseFloat(k.getAttribute("data-value")));
            k.getAttribute("data-onready") &&
                (e.onready = function () {
                    eval(this.config.renderTo.getAttribute("data-onready"));
                });
            e.draw();
            
        }
});
window.Gauge = Gauge;

// 1
  var myWidth = 400; //WindowSize("Width") / 2;
  var myHeight = 400; //WindowSize("Height") / 2;

  var gauge = new Gauge({
  renderTo: 'gauge',
  width: myWidth,
  height: myHeight,
  glow: true,
  units: 'Loans',
  title: 'Protiviti',
  minValue: 0,
  maxValue: 100,
  majorTicks: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],//,'11', 'T', '12', '13', '14','15'],
  minorTicks: 5,
  strokeTicks: false,
  highlights: [
  { from: 0, to: 30, color: 'white' },
  { from: 30, to: 40, color: '#addd8e' },
  { from: 40, to: 60, color: 'white' },
  { from: 60, to: 80, color: '#feb24c' },
  { from: 80, to: 100, color: 'red' },
 ],
  colors: {
  plate: 'white',
  majorTicks: '#222',
  minorTicks: '#222',
  title: '#222',
  units: '#222',
  numbers: '#222',
  needle: { start: '#f00', end: '#f00' }
  }
  });
  gauge.setValue(30); // set the needle value
  gauge.draw();

  //Resizes the gauge when the screen size changes
  window.onresize = function () {
    var myWidth = 400; // WindowSize("Width") / 2;
    var myHeight = 400; // WindowSize("Height") / 2;
    gauge.updateConfig({
      width: myWidth,
      height: myHeight
  });
  };

  function ChangeTachoBGColor(bgColour) {
    gauge.updateConfig({
      colors: {
        plate: bgColour
      }
    });
  }

  //This function is just setup so I can call multiple other functions of body load
  function funcOnload() {
    var TachoHighlightGreen = getCookie("TachoHighlightGreenCookie");
    var TachoHighlightYellow = getCookie("TachoHighlightYellowCookie");
    var TachoHighlightRed = getCookie("TachoHighlightRedCookie");
  //GetArduinoInputs();
  //GetActFreq();
  //UpdateVariables(1); //Load the variables into the imput boxes on page load

  }
  
  //
  // Start template
  //
  let template = document.createElement("template");
  template.innerHTML = `
          <style>
              :host {
                  display: block;
              } 
          </style> 
          <div id="chart_div"></div>
      `;

  class pGauge extends HTMLElement {
      constructor() {
          super(); 
          let shadowRoot = this.attachShadow({mode: "open"});
          shadowRoot.appendChild(template.content.cloneNode(true));
          this.addEventListener("click", event => {
              var event = new Event("onClick");
              this.dispatchEvent(event);
          });
          this._props = {};
      }

      connectedCallback(){
          
      }

      onCustomWidgetBeforeUpdate(changedProperties) {
          this._props = { ...this._props, ...changedProperties };

      }

      onCustomWidgetAfterUpdate(changedProperties) {
          console.log("onCustomWidgetAfterUpdate")
          console.log("this._props prop = ", this._props);
          this._props = { ...this._props, ...changedProperties };

          var ctx = this.shadowRoot.getElementById('chart_div');

          var myProps = this._props
          
        //   google.charts.load('current', {'packages':['gauge']});
        //   google.charts.setOnLoadCallback(function() {
        //       drawChart(myProps);
        //  });
          console.log("changedProperties = ", changedProperties);

          function drawChart(props) {
              console.log("props =", props)
           //   var data = google.visualization.arrayToDataTable([
            //   ['Label', 'Value'],
            //   [props.label, props.value]
            //   ]);

              var options = {
              chartArea: {
                  // leave room for y-axis labels
                  width: '94%'
                  },
                  legend: {
                  position: 'top'
                  },
                  width: '100%',
              redFrom: props.redFrom, redTo: props.redTo,
              yellowFrom:props.yellowFrom, yellowTo: props.yellowTo,
              minorTicks: 5
              };

            //  var chart = new google.visualization.Gauge(ctx);

            gauge.setValue(30); // set the needle value
            gauge.draw();
          }
      }
  }

  customElements.define("com-protiviti-pgauge", pGauge);