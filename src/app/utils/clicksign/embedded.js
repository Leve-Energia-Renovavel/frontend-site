export default function Clicksign(i) {
    "use strict";

    function t(t) {
        var e;
        (n[(e = t).name || e] || []).forEach(function (e) {
            e(t.data)
        })
    }
    var o, r, e = window.location.protocol + "//" + window.location.host,
        n = {},
        c = function (e) {
            t(e.data)
        };
    return {
        endpoint: "https://app.clicksign.com",
        origin: e,
        mount: function (e) {
            var t = "/sign/" + i,
                n = "?embedded=true&origin=" + this.origin,
                n = this.endpoint + t + n;
            return r = document.getElementById(e), (o = document.createElement("iframe")).setAttribute("src", n), o.setAttribute("style", "color: orange; width: 100%; height: 100%;"), o.setAttribute("allow", "camera;geolocation;fullscreen;gyroscope;accelerometer;magnetometer"), window.addEventListener("message", c), r.appendChild(o)
        },
        unmount: function () {
            return o && (r.removeChild(o), o = r = null, window.removeEventListener("message", c)), !0
        },
        on: function (e, t) {
            return n[e] || (n[e] = []), n[e].push(t)
        },
        trigger: t
    }
}