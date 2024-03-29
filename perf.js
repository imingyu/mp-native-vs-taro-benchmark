var Native = [
  [App, "onLaunch", "onShow"],
  [Page, "onLoad", "onReady"],
];

var PerfData = [["Start", Date.now()]];

function wrap(index) {
  return function (config) {
      config = config || {};
      Native[index].slice(1).forEach(function (life, li) {
          var old = config[life];
          config[life] = function () {
              console.warn(
                  global.Runtime+(index ? "Page" : "App") +
                      (li ? "Ready" : "Load") +
                      "Duration=" +
                      (Date.now() -
                      PerfData[0][1]) +
                      "ms"
              );
              if (old) {
                  old.apply(this, arguments);
              }
          };
      });
      return Native[index][0](config);
  };
}

App = wrap(0);
Page = wrap(1);

global.PerfData = PerfData;
