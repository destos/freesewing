/**
 * @freesewing/components/Spinner | v2.0.0-beta.19
 * A collection of React components for FreeSewing web UIs
 * (c) 2019 Joost De Cock <joost@decock.org> (https://github.com/joostdecock)
 * @license MIT
 */ "use strict";
function _interopDefault(a) {
  return a && "object" == typeof a && "default" in a ? a["default"] : a;
}
var React = _interopDefault(require("react")),
  PropTypes = _interopDefault(require("prop-types")),
  Spinner = function(a) {
    return React.createElement(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        width: a.embed ? "" : a.size,
        height: a.embed ? "" : a.size,
        viewBox: "-28 -28 108 108",
        className: "spinner " + a.className
      },
      React.createElement("path", {
        d:
          "M 35.222,0 C 34.233,0.703 34.284,0.613 33.485,0.874 31.653,1.473 29.896,1.144 27.811,0.97 27.184,0.9 26.562,0.859 25.955,0.855 22.89,0.834 20.287,1.733 19.794,4.243 18.885,4.794 18.049,5.461 17.221,6.129 15.453,7.524 14.122,9.229 13.214,11.284 11.974,14.319 13.094,17.576 13.649,20.652 13.781,21.372 13.919,22.058 13.993,22.323 14.098,22.696 14.283,23.052 14.484,23.372 14.531,23.38 14.779,22.998 14.838,22.829 14.924,22.583 14.915,22.188 14.821,21.848 14.613,21.083 14.415,20.462 14.398,20.15 14.368,19.564 14.482,19.023 14.696,18.755 14.772,18.66 14.946,19.15 14.901,19.332 14.848,19.551 14.808,19.926 14.825,20.099 14.872,20.685 14.958,21.312 15.065,21.86 15.202,22.567 15.261,23.021 15.236,23.197 15.218,23.325 15.158,23.454 14.928,23.85 14.728,24.197 14.624,24.478 14.608,24.726 14.591,24.968 14.664,25.573 14.732,25.721 14.831,25.952 15.129,26.195 15.389,26.255 15.638,26.35 15.763,26.547 15.891,26.768 16.202,27.361 16.442,28.083 16.68,29.171 16.796,29.692 16.893,30.157 16.924,30.401 15.004,30.403 12.545,30.404 10.305,30.404 9.551,30.416 8.189,30.062 6.94,29.98 6.759,28.026 5.901,25.756 4.433,25.624 3.431,25.533 2.6,25.914 1.897,27.497 L 1.917,27.582 C 2.332,27.235 2.77,26.174 4.348,26.247 5.56,26.302 5.964,28.596 6.084,29.976 5.346,30.03 4.718,30.257 4.39,30.824 L 4.383,30.824 C 4.383,30.825 4.383,30.827 4.386,30.829 4.383,30.831 4.383,30.833 4.383,30.835 L 4.39,30.835 C 4.728,31.416 5.379,31.641 6.144,31.686 6.655,46.136 20.238,48 23.95,48 37.798,48 42.646,38.59 43.375,34.863 43.716,36.451 42.642,38.474 42.385,39.967 45.306,36.59 44.778,33.343 44.244,30.077 44.688,30.605 45.289,30.932 46.104,30.751 45.523,30.363 44.735,30.635 44.263,28.998 44.057,28.291 43.879,27.761 43.702,27.316 43.32,25.883 42.778,24.514 42.112,23.18 41.55,21.733 41.921,20.795 41.865,19.553 42.876,22.887 43.508,23.774 44.688,24.123 41.72,20.547 42.736,15.01 41.059,10.068 41.818,10.514 42.684,10.648 43.606,10.103 42.714,9.849 41.824,10.52 40.544,8.639 39.463,6.536 37.897,4.983 35.997,3.613 34.979,2.949 33.849,2.503 32.713,2.089 33.87,1.799 35.162,0.769 35.222,0 z M 33.281,11.107 C 34.805,11.663 36.485,13.775 36.466,15.847 L 36.466,15.933 36.466,15.963 C 36.425,18.777 35.146,20.29 35.2,22.164 35.269,24.371 36.219,25.141 36.408,25.509 36.084,24.148 35.894,22.436 36.322,21.08 36.872,19.336 37.427,17.892 37.387,16.526 37.367,16.206 37.231,15.009 37.14,14.479 38.774,16.837 36.786,20.266 37.358,22.51 38.352,26.419 42.807,26.913 41.481,34.789 40.314,41.713 32.318,46.968 24.122,46.968 18.046,46.968 7.517,43.605 6.997,31.676 8.232,31.588 9.56,31.244 10.305,31.256 12.557,31.256 15.129,31.257 17.067,31.258 17.431,32.9 17.704,33.296 19.085,34.39 20.621,35.598 20.979,35.745 23.251,35.767 25.524,35.79 26.198,35.303 28.403,33.217 28.879,32.659 29.085,31.928 29.316,31.241 31.584,31.22 33.238,31.18 34.865,31.104 36.522,31.029 36.756,31.104 39.426,30.829 36.756,30.554 36.522,30.629 34.865,30.553 33.281,30.481 31.677,30.44 29.508,30.42 29.69,29.603 29.95,28.805 30.227,28.016 30.398,27.551 30.599,27.098 30.805,26.647 L 31.03,26.577 C 31.464,26.423 31.848,26.093 32.001,25.647 32.198,25.056 32.058,24.392 31.677,23.909 31.546,23.728 31.383,23.497 31.316,23.395 31.115,23.077 31.11,22.9 31.28,21.718 31.423,20.728 31.439,20.21 31.34,19.708 31.32,19.421 31.318,18.831 31.309,18.672 31.385,18.714 31.55,19.09 31.717,19.599 31.883,20.11 31.91,20.216 31.948,20.651 31.99,21.145 31.805,21.511 31.653,22.248 31.577,22.628 31.51,22.981 31.51,23.029 31.51,23.08 31.546,23.188 31.584,23.272 31.673,23.46 31.84,23.724 31.871,23.724 32.416,23.123 32.736,22.381 33.021,21.628 33.321,20.776 33.409,19.872 33.619,18.995 33.789,18.231 33.985,17.466 34.046,16.682 34.169,15.152 34.097,14.072 33.759,12.478 33.678,12.118 33.444,11.431 33.281,11.107 z M 27.921,18.644 C 28.506,18.637 29.085,18.708 29.636,18.867 30.385,19.154 30.49,19.823 30.628,20.574 30.705,21.054 30.702,21.399 30.615,21.963 30.554,22.781 30.229,23.414 29.519,23.859 28.448,24.057 27.303,24.248 26.395,23.539 25.633,22.489 25.174,21.162 25.349,19.868 25.46,19.337 25.707,19.061 26.215,18.896 26.762,18.739 27.341,18.653 27.921,18.644 z M 19.038,18.739 C 19.585,18.734 20.138,18.792 20.442,18.986 21.747,19.869 21.328,21.306 20.812,22.567 20.061,24.218 18.437,24.157 16.863,24.144 15.992,23.889 15.912,23.175 15.786,22.412 15.678,21.675 15.448,20.885 15.64,20.144 16.133,18.952 17.935,18.815 19.038,18.739 z M 38.941,18.945 C 38.948,22.118 39.49,23.677 40.578,25.924 39.937,24.701 39.021,24.005 38.68,22.543 38.028,19.72 38.731,19.878 38.941,18.945 z M 23.128,21.243 C 23.3,21.417 23.383,21.657 23.532,21.848 23.647,21.651 23.765,21.455 23.913,21.28 23.99,21.282 24.084,21.434 24.169,21.706 24.533,22.712 24.604,23.819 25.076,24.786 25.517,25.486 24.915,25.894 24.254,25.926 23.772,25.925 23.568,25.596 23.285,25.27 23.212,25.483 23.073,25.62 22.907,25.764 22.485,26.118 21.658,25.987 21.53,25.429 21.7,24.363 22.243,23.384 22.599,22.362 22.776,21.989 22.778,21.703 23.128,21.243 z M 16.936,26.628 C 17.149,26.628 17.734,27.025 17.853,27.249 17.935,27.398 18.122,27.978 18.135,28.119 18.156,28.287 18.105,28.685 18.053,28.793 18.015,28.87 17.986,28.881 17.942,28.831 17.905,28.789 17.415,27.849 17.102,27.227 16.856,26.729 16.83,26.628 16.936,26.628 z M 29.158,26.939 C 29.166,26.94 29.178,26.943 29.189,26.946 29.255,26.973 29.209,27.207 28.961,28.057 28.914,28.313 28.8,28.515 28.633,28.683 28.578,28.683 28.553,28.619 28.467,28.264 28.394,27.961 28.386,27.691 28.437,27.449 28.525,27.146 28.881,27.053 29.158,26.939 z M 27.675,28.792 C 27.696,28.788 27.716,28.799 27.742,28.82 27.832,28.883 27.845,29.049 27.785,29.374 27.712,29.792 27.696,29.838 27.588,29.881 27.541,29.902 27.457,29.917 27.401,29.917 27.3,29.899 27.274,29.817 27.298,29.693 27.298,29.433 27.374,29.207 27.546,28.94 27.611,28.84 27.644,28.797 27.675,28.792 z M 19.042,28.811 C 19.111,28.811 19.319,28.961 19.396,29.065 19.482,29.175 19.58,29.83 19.525,29.943 19.462,30.085 19.154,30.014 19.069,29.837 19.017,29.731 18.894,29.159 18.894,29.023 18.894,28.897 18.955,28.811 19.042,28.811 z M 26.933,28.984 C 27.017,29.104 27.039,29.258 27.021,29.596 L 27.004,29.904 26.916,29.992 C 26.863,30.041 26.773,30.101 26.719,30.126 26.6,30.182 26.509,30.187 26.492,30.142 26.472,30.082 26.506,29.7 26.543,29.571 26.586,29.438 26.779,29.041 26.843,28.957 26.872,28.88 26.906,28.976 26.933,28.984 z M 21.912,28.966 C 22.093,29.012 22.173,29.175 22.272,29.323 L 22.339,29.455 22.245,29.782 C 22.195,29.962 22.142,30.124 22.126,30.142 22.108,30.162 22.041,30.172 21.942,30.171 21.678,30.164 21.648,30.153 21.577,30.045 L 21.511,29.947 21.567,29.672 C 21.648,29.276 21.687,29.157 21.777,29.055 21.824,29 21.871,28.97 21.912,28.966 z M 20.241,29.249 20.39,29.398 20.415,29.735 C 20.428,29.919 20.434,30.09 20.424,30.111 20.415,30.14 20.361,30.148 20.194,30.148 L 19.977,30.148 C 19.861,30.021 19.825,29.866 19.776,29.706 19.662,29.225 19.662,29.006 19.78,28.977 19.973,28.989 20.1,29.129 20.241,29.249 z M 26.041,29.018 C 26.277,29.081 26.23,29.456 26.229,29.724 26.211,30.158 26.194,30.248 26.138,30.304 26.041,30.401 25.771,30.347 25.64,30.203 25.597,30.151 25.593,30.135 25.627,29.924 25.666,29.667 25.716,29.507 25.827,29.287 25.908,29.129 25.984,29.03 26.041,29.018 z M 20.715,29.038 C 20.728,29.037 20.749,29.038 20.769,29.04 20.919,29.052 21.059,29.15 21.183,29.33 L 21.283,29.477 C 21.292,29.718 21.283,29.972 21.24,30.196 21.214,30.209 21.106,30.229 21,30.239 20.816,30.256 20.799,30.252 20.735,30.196 20.646,30.12 20.621,29.979 20.599,29.511 20.586,29.129 20.595,29.044 20.715,29.038 z M 22.984,29.118 C 23.145,29.152 23.247,29.238 23.292,29.379 23.328,29.5 23.35,30.177 23.315,30.224 23.303,30.244 23.227,30.269 23.14,30.28 22.816,30.321 22.53,30.29 22.502,30.213 22.466,30.125 22.707,29.253 22.796,29.145 22.834,29.061 22.926,29.126 22.984,29.118 z M 25.082,29.124 C 25.153,29.117 25.229,29.185 25.303,29.33 25.363,29.451 25.372,29.493 25.372,29.764 25.372,29.98 25.359,30.073 25.336,30.093 25.316,30.109 25.235,30.138 25.149,30.16 24.999,30.199 24.966,30.203 24.919,30.187 L 24.694,30.146 24.711,30.012 C 24.727,29.837 24.842,29.449 24.923,29.281 24.971,29.181 25.026,29.131 25.082,29.124 z M 24.104,29.127 C 24.151,29.125 24.173,29.136 24.203,29.169 24.274,29.253 24.364,29.501 24.421,29.766 24.497,30.139 24.497,30.138 24.334,30.187 24.263,30.209 24.113,30.232 24.006,30.238 23.653,30.256 23.626,30.235 23.669,29.923 23.703,29.645 23.84,29.207 23.899,29.175 23.963,29.141 24.037,29.142 24.104,29.127 z M 6.111,30.536 C 6.114,30.535 6.118,30.536 6.118,30.536 6.127,30.731 6.127,30.928 6.131,31.124 5.636,31.086 5.272,30.968 5.272,30.829 5.272,30.692 5.623,30.575 6.111,30.536 z M 6.976,30.553 C 7.377,30.603 7.654,30.708 7.649,30.829 7.649,30.951 7.381,31.055 6.983,31.104 6.979,30.921 6.979,30.737 6.976,30.553 z M 25.702,31.086 C 25.736,31.083 25.751,31.08 25.803,31.085 26.011,31.106 26.041,31.119 26.041,31.189 26.041,31.281 25.883,31.558 25.776,31.654 25.726,31.702 25.657,31.742 25.633,31.742 25.513,31.742 25.443,31.489 25.499,31.256 25.533,31.13 25.595,31.091 25.702,31.086 z M 24.947,31.169 C 25.04,31.161 25.13,31.186 25.22,31.198 25.194,31.461 25.076,31.676 24.857,31.819 24.803,31.819 24.776,31.716 24.776,31.491 24.776,31.223 24.79,31.172 24.947,31.169 z M 24.119,31.266 C 24.312,31.266 24.482,31.275 24.49,31.286 24.526,31.32 24.422,31.578 24.269,31.84 24.138,32.073 24.119,32.09 24.038,32.096 23.72,32.06 23.729,31.687 23.68,31.431 23.68,31.279 23.714,31.266 24.119,31.266 z M 21.11,31.295 C 21.331,31.299 21.417,31.332 21.417,31.417 21.417,31.525 21.335,31.74 21.288,31.767 21.217,31.806 21.211,31.804 21.071,31.658 20.85,31.41 20.825,31.364 21.11,31.295 z M 22.174,31.306 C 22.178,31.312 22.221,31.39 22.264,31.478 22.358,31.661 22.365,31.741 22.298,31.802 22.14,31.892 22.107,31.841 21.964,31.75 21.798,31.593 21.667,31.382 21.71,31.338 21.858,31.285 22.021,31.305 22.174,31.306 z M 22.596,31.311 22.991,31.318 C 23.145,31.318 23.278,31.326 23.285,31.338 23.312,31.362 23.225,31.876 23.178,31.992 23.124,32.122 22.935,32.123 22.837,31.969 22.697,31.748 22.605,31.562 22.602,31.434 L 22.596,31.311 z"
      }),
      React.createElement(
        "circle",
        {
          cx: "24",
          cy: "24",
          r: "35",
          strokeWidth: "1",
          className: "darker",
          stroke: "blue"
        },
        React.createElement("animate", {
          attributeType: "CSS",
          attributeName: "stroke-dasharray",
          from: "40 360",
          to: "120 280",
          begin: "loop.begin;",
          dur: "1.5s"
        }),
        React.createElement("animate", {
          attributeType: "CSS",
          attributeName: "stroke-dasharray",
          from: "120 280",
          to: "40 360",
          begin: "loop.begin+1.5s;",
          dur: "1.5s"
        }),
        React.createElement("animateTransform", {
          attributeName: "transform",
          attributeType: "XML",
          type: "rotate",
          from: "0 24 24",
          to: "360 24 24",
          dur: "1s",
          repeatCount: "indefinite"
        })
      ),
      React.createElement(
        "rect",
        { height: "1", width: "6", x: "15.5", y: "17", className: "blink" },
        React.createElement("animate", {
          attributeType: "XML",
          attributeName: "height",
          from: "1",
          to: "7.2",
          begin: "loop.begin+1.5s;",
          dur: "0.15s"
        })
      ),
      React.createElement(
        "rect",
        { height: "1", width: "5.8", x: "25", y: "17", className: "blink" },
        React.createElement("animate", {
          attributeType: "XML",
          attributeName: "height",
          from: "1",
          to: "7.2",
          begin: "loop.begin+1.5s;",
          dur: "0.15s"
        })
      ),
      React.createElement(
        "rect",
        { height: "1", width: "1", x: "-10", y: "-10", fill: "none" },
        React.createElement("animate", {
          attributeType: "CSS",
          attributeName: "visibility",
          from: "hide",
          to: "hide",
          begin: "0;loop.end",
          dur: "3s",
          id: "loop"
        })
      )
    );
  };
(Spinner.propTypes = { size: PropTypes.number, embed: PropTypes.bool }),
  (Spinner.defaultProps = { size: 200, embed: !1 }),
  (module.exports = Spinner);
//# sourceMappingURL=index.js.map
