import { BsSnow } from "react-icons/bs";
import { GiMineWagon, GiMushroomGills, GiPalmTree, GiSandSnake, GiSmokingVolcano, GiSnail } from "react-icons/gi";
import { FaDroplet, FaHeart, FaQuestion, FaUmbrellaBeach, FaVolcano } from "react-icons/fa6";
import { MdDarkMode } from "react-icons/md";
import { IoHeart, IoSnow, IoSunny } from "react-icons/io5";
import { FieldShape, HumanEraAffiliation, LocationType, SiteSubtype, WorldAffiliation, type SystemLocationNode } from "@/components/special/MapScreen/BaseMap/data/types";
import { ActiveMap, type ActiveMapMeta, ActiveMapType } from "@/components/special/MapScreen/BaseMap/data/mapTypes";

// Data for generation of objects
export const locationsData: SystemLocationNode = {
  id: "sol",
  name: "Sol",
  typeText: "Main Sequence Star",
  flavorText: `THERE IS NOTHING ON THE SUN.
    THE SURFACE IS TOO HOT FOR ANYTHING TO EXIST HERE.
    STOP LOOKING AT THE SURFACE OF THE SUN.`,
  type: LocationType.Sun,
  worldAffiliation: WorldAffiliation.Natural,
  icon: <IoSunny  />,
  distance: 0,
  radius: 35,
  startingAngle: 0,
  color: "#ffc712",
  colorSecondary: "#fff38f",
  isImportant: true,
  children: [
    // NEAR SOL
    {
      id: "interbeacon",
      name: "Interbeacon",
      typeText: "Huge Telecommunications Statite",
      flavorText: "Glory to the Union, even in death. Home to RADIUS, the Silent Observer.",
      icon: <svg viewBox="0 0 122 60"
      width="122px" height="60px">
     <path fillRule="evenodd"  fill="rgb(255, 78, 24)"
      d="M61.023,45.279 C61.023,45.279 61.223,45.279 61.540,45.279 C62.723,45.279 65.524,45.279 65.524,45.279 L66.172,58.246 L71.363,58.246 L76.553,59.543 L80.445,43.334 L80.445,31.664 L86.284,31.664 L90.825,29.071 L116.128,27.774 L116.777,29.071 L121.967,29.071 L121.967,19.994 C121.967,19.994 119.181,19.994 116.777,19.994 C105.359,-0.385 61.023,0.544 61.023,0.544 L60.982,0.544 C60.982,0.544 16.675,-0.385 5.265,19.994 C2.863,19.994 0.079,19.994 0.079,19.994 L0.079,29.071 L5.265,29.071 L5.914,27.774 L31.199,29.071 L35.737,31.664 L41.572,31.664 L41.572,43.334 L45.463,59.543 L50.649,58.246 L55.836,58.246 L56.484,45.279 L60.982,45.279 L61.023,45.279 Z"/>
     </svg>,
      description:
        "Interbeacon was an enormous statite built to syncronize the Aggregate, the Union's interplanetery datanet. Today, it hosts RADIUS, the final remnant of the Union's automated economic planning system. Their voice booms across the skies, visible from all points in the System.",
      type: LocationType.Site,
      subType: SiteSubtype.Beacon,
      worldAffiliation: WorldAffiliation.HumanEra,
      humanEraAffiliation: HumanEraAffiliation.GreaterUnion,
      distance: 25,
      startingAngle: 270,
    },
    {
      id: "axiom",
      name: "Axiom",
      typeText: "Fractal Solar Array",
      flavorText:
        "First, energy to the System. Next, energy to the universe.",
      icon: <svg viewBox="0 0 178 63"
      width="178px" height="63px">
     <path fill-rule="evenodd"  fill="rgb(70, 255, 255)"
      d="M177.615,13.167 C177.295,14.377 174.463,14.743 174.463,14.743 L160.278,14.743 L160.278,16.319 L131.909,21.048 L131.909,22.624 L109.844,22.624 L108.268,24.200 L108.268,36.808 L105.116,38.385 L105.116,43.113 L101.964,46.265 L100.387,46.265 L98.811,47.841 L97.236,62.026 L94.083,62.026 L92.507,50.993 L86.203,50.993 L86.203,52.569 L84.627,55.721 L81.475,54.145 L81.475,49.417 L79.258,47.841 L77.682,46.265 L76.106,46.265 L72.954,43.113 L72.954,38.385 L69.802,36.808 L69.802,24.200 L68.226,22.624 L46.161,22.624 L46.161,21.048 L17.792,16.319 L17.792,14.743 L3.607,14.743 C3.607,14.743 0.774,14.377 0.455,13.167 C0.135,11.958 0.455,11.591 0.455,11.591 C0.455,11.591 68.214,7.240 75.480,6.888 L76.746,0.559 C76.746,0.559 78.621,0.429 78.323,0.559 C78.111,0.651 78.200,4.591 78.270,6.863 C80.761,6.863 83.987,6.863 83.987,6.863 L92.809,6.863 C94.233,5.902 96.358,4.922 98.811,5.287 C100.336,5.514 101.155,6.144 101.616,6.863 C101.728,6.863 101.868,6.863 101.964,6.863 C103.989,6.863 177.615,11.591 177.615,11.591 C177.615,11.591 177.935,11.958 177.615,13.167 ZM65.164,51.425 L58.221,56.054 L48.964,53.739 L55.907,51.425 L65.164,51.425 ZM157.738,32.910 L143.852,37.539 L134.595,32.910 L143.852,30.596 L157.738,32.910 Z"/>
     </svg>,
      description: "",
      type: LocationType.Site,
      subType: SiteSubtype.MachineMade,
      worldAffiliation: WorldAffiliation.MachineEra,
      distance: 45,
      startingAngle: 140,
    },
    {
      id: "yadron",
      name: "Yadron",
      typeText: "Solar Research Station",
      flavorText: "Ancient Union outpost for studying the Sun. Decrepit, even in mankind's prime.",
      icon: <svg viewBox="0 0 48 111"
      width="48px" height="111px">
     <path fill-rule="evenodd"  fill="rgb(255, 78, 24)"
      d="M45.259,67.869 C43.624,71.788 40.130,74.738 35.877,75.612 L34.427,77.062 L30.877,77.062 L30.060,75.428 C29.662,75.325 29.255,75.247 28.873,75.111 L26.392,93.302 L23.028,96.666 L20.228,96.235 L20.228,98.361 L16.678,98.361 L15.495,110.193 L13.128,110.193 L13.957,95.271 L12.093,94.984 L12.093,89.937 L7.887,89.937 L5.364,86.572 L6.637,49.636 L1.296,46.297 L0.112,41.564 L1.296,38.015 L7.038,38.015 L7.046,37.786 L6.205,35.263 L6.205,31.898 L7.887,25.169 L8.728,22.646 L12.093,22.646 L14.616,23.487 L16.908,23.614 C17.503,21.681 19.282,20.266 21.411,20.266 C23.725,20.266 25.644,21.928 26.056,24.122 L27.404,24.197 L29.694,0.151 L32.060,0.151 L30.877,17.899 L33.243,17.899 L32.060,20.266 L36.793,21.449 L37.976,10.800 L40.343,10.800 L40.343,22.632 L39.596,24.875 L44.897,25.169 L44.056,28.534 L27.233,40.310 L31.384,49.995 C31.993,49.908 32.610,49.847 33.243,49.847 C39.655,49.847 44.971,54.487 46.048,60.589 L47.442,60.497 L47.442,62.863 L47.442,66.413 L45.259,67.869 Z"/>
     </svg>,
      type: LocationType.Site,
      subType: SiteSubtype.Outpost,
      worldAffiliation: WorldAffiliation.HumanEra,
      humanEraAffiliation: HumanEraAffiliation.GreaterUnion,
      distance: 32,
      startingAngle: 5,
    },

    // WORLDS
    {
      id: "mercury",
      name: "Mercury",
      typeText: "Lifeless Mining World",
      icon: <GiMineWagon />,
      flavorText: "A rock deep with precious minerals and strange melted cities.",
      type: LocationType.Planet,
      worldAffiliation: WorldAffiliation.Natural,
      color: "#f58f20",
      colorSecondary: "#fcbb3d",
      distance: 125,
      radius: 8,
      startingAngle: 25,//35
      children: [
        {
          name: "Seraph",
          typeText: "Collapsed Reality",
          flavorText:
            "The wound left behind by an event so devastating that the universe itself winced.", //WE ARE LEAKING SOUL AT AN ASTOUNDING RATE.
          type: LocationType.Field,
          worldAffiliation: WorldAffiliation.Anomaly,
          fieldShape: FieldShape.Mercury,
          fieldLabelOffset: {x: 100, y: 30},
          distance: 30,
          startingAngle: 340,//30
          children: [
            {
              id: "inner-eye",
              name: "Inner Eye",
              typeText: "SRI Noetic Research Orbital",
              flavorText:
                "The beginning, the end, and all that came in between. The gargantuan noetic system rests untouched since the Interrupt, amidst a field of stars and signals.",
              description:
                "The Inner Eye was the final orbital-class space station to be built by humans. The noetic altar built into its core, Project WHITE SERAPH, was activated on the same day the Unexpected Interrupt occured: May 5, 2095, the day mankind vanished from the System.",
              icon: <svg viewBox="0 0 96 84"
              width="96px" height="84px">
             <path fill-rule="evenodd"  fill="rgb(255, 19, 241)"
              d="M6.652,56.385 C6.652,56.240 6.652,56.094 6.652,55.949 C4.650,55.657 2.648,55.366 0.646,55.075 C0.515,54.822 0.483,54.826 0.428,54.420 C0.719,54.383 1.010,54.347 1.301,54.311 C7.233,55.148 13.167,55.985 19.099,56.822 C32.055,58.642 45.014,60.462 57.970,62.281 C57.961,61.746 57.868,61.291 57.642,60.971 C53.830,58.753 48.842,57.652 46.287,54.202 C45.422,53.033 44.427,51.674 43.885,50.271 C43.630,49.543 43.375,48.815 43.120,48.087 C42.153,46.933 40.724,47.662 40.718,45.357 C40.791,45.357 40.864,45.357 40.937,45.357 C41.373,45.357 41.810,45.357 42.247,45.357 C42.572,44.767 43.421,44.535 43.666,44.047 C43.666,42.664 43.666,41.281 43.666,39.898 C43.630,39.425 43.594,38.952 43.557,38.478 C43.002,38.277 42.606,37.906 42.356,37.387 C41.598,37.392 41.299,37.253 40.718,37.168 C40.718,36.768 40.718,36.367 40.718,35.967 C41.519,35.421 42.320,34.875 43.120,34.329 C43.594,33.165 44.067,31.1000 44.540,30.835 C46.188,28.228 48.329,25.999 50.982,24.393 C52.304,23.593 57.415,22.510 57.752,21.227 C57.861,20.754 57.970,20.280 58.079,19.807 C38.864,21.190 19.643,22.573 0.428,23.956 C0.308,23.727 0.285,23.749 0.209,23.410 C0.505,23.257 0.668,23.200 1.192,23.192 C2.939,23.046 4.686,22.901 6.433,22.755 C6.470,22.573 6.506,22.391 6.542,22.209 C6.215,22.209 5.887,22.209 5.560,22.209 C5.523,22.137 5.487,22.064 5.450,21.991 C5.487,21.955 5.523,21.918 5.560,21.882 C7.339,21.811 6.485,19.892 7.634,19.261 C26.886,13.948 46.143,8.633 65.395,3.320 C69.980,2.665 74.567,2.009 79.153,1.354 C81.967,0.753 85.518,-0.103 88.324,0.481 C88.736,5.972 90.028,10.679 90.071,16.532 C89.332,16.607 89.077,16.763 89.089,17.623 C89.307,17.733 89.525,17.842 89.744,17.951 C88.919,20.033 87.020,22.777 86.796,25.048 C88.264,25.681 90.807,29.708 91.491,31.272 C91.709,31.927 91.928,32.582 92.146,33.237 C92.963,34.501 94.938,34.834 94.985,36.841 C95.240,37.038 95.121,36.875 95.203,37.277 C94.585,37.350 93.966,37.423 93.347,37.496 C93.075,37.826 92.290,38.365 92.146,38.697 C92.146,40.589 92.146,42.482 92.146,44.375 C92.709,44.797 92.918,45.465 93.784,45.576 C94.220,45.648 94.657,45.721 95.094,45.794 C95.094,46.231 95.094,46.668 95.094,47.104 C92.002,49.335 91.547,52.320 89.416,55.293 C88.666,56.340 86.774,57.467 86.468,58.787 C87.238,60.082 89.241,64.589 89.416,66.103 C88.931,66.252 88.905,66.253 88.870,66.867 C88.907,66.977 88.943,67.086 88.979,67.195 C90.278,67.383 89.927,69.376 89.853,70.798 C89.234,74.983 88.615,79.170 87.997,83.355 C87.924,83.355 87.851,83.355 87.778,83.355 C85.908,84.341 83.976,82.785 82.210,82.700 C81.183,82.650 79.818,82.290 79.043,81.935 C78.675,81.766 77.971,81.974 77.406,81.826 C75.207,81.252 73.439,81.053 71.400,80.516 C70.375,80.246 68.868,79.589 67.688,79.533 C65.261,79.417 61.675,78.208 59.717,77.022 C59.280,76.949 58.843,76.876 58.407,76.803 C57.052,76.342 55.451,75.779 54.258,75.166 C54.003,75.166 53.748,75.166 53.493,75.166 C51.876,74.581 50.027,73.758 48.471,73.200 C46.936,72.651 45.529,72.533 44.321,71.781 C43.968,71.561 43.204,71.440 42.902,71.562 C40.354,70.451 37.712,69.825 34.931,68.833 C33.070,68.168 30.723,67.280 28.926,66.540 C27.198,65.828 25.036,65.514 23.794,64.793 C23.430,64.756 23.066,64.720 22.702,64.684 C21.045,63.992 18.648,63.363 17.352,62.609 C16.588,62.427 15.823,62.245 15.059,62.063 C12.697,61.227 9.617,60.418 7.416,59.224 C7.295,58.264 6.780,57.808 6.652,56.822 C6.324,56.786 5.996,56.749 5.669,56.713 C5.669,56.604 5.669,56.494 5.669,56.385 C5.996,56.385 6.324,56.385 6.652,56.385 Z"/>
             </svg>,
              type: LocationType.Site,
              subType: SiteSubtype.Orbital,
              worldAffiliation: WorldAffiliation.Anomaly,
              humanEraAffiliation: HumanEraAffiliation.SunsetResearchInitiative,
              distance: 0,
              startingAngle: 25,
            },
          ]
        },
        
      ],
    },
    {
      name: "Venus",
      type: LocationType.Planet,
      worldAffiliation: WorldAffiliation.Natural,
      typeText: "Hot Jungle World",
      flavorText:
        "Welcome, comrade! Here, our people work as hard as the machines to build our Communist future- ALERT. ALERT. Hive invasion detected. Seek shelter.",
      description: "",
      color: "#aae653",
      colorSecondary: "#ebe654",
      distance: 165,
      radius: 15,
      startingAngle: 205, //205
      isImportant: true,
      icon: <GiPalmTree />,
      children: [
        {
          name: "Merdem's Ring",
          typeText: "Independent Orbital",
          flavorText: "The most tense military stalemate in human history. Things seem to have cooled down since the Unexpected Interrupt, though.",
          description:
            "Tolkiy Began as an orbital gulag until a revolution turned it into stalemate. Source of many Union troubles.",
          type: LocationType.Site,
          subType: SiteSubtype.Orbital,
          worldAffiliation: WorldAffiliation.HumanEra,
          distance: 38,
          startingAngle: 150,
          icon: <svg 
          viewBox="0 0 91 89"
          width="91px" height="89px">
         <path fill-rule="evenodd"  fill="rgb(255, 78, 24)"
          d="M90.957,39.655 C88.959,40.212 86.960,40.769 84.963,41.326 C84.787,41.139 84.718,41.069 84.609,40.684 C84.267,40.220 84.146,38.467 84.120,37.780 C83.694,35.349 83.267,32.918 82.841,30.487 C81.760,30.803 80.679,31.118 79.598,31.434 C78.962,34.677 76.650,38.134 74.670,40.638 C73.156,42.552 71.970,44.756 70.369,46.643 C67.002,50.613 62.542,54.015 57.131,56.751 C57.319,57.467 57.508,58.184 57.697,58.900 C58.139,59.310 58.303,60.850 58.485,61.542 C58.906,63.024 59.328,64.506 59.749,65.989 C59.979,66.399 60.232,66.777 60.415,67.468 C60.666,68.417 61.317,69.938 60.624,70.354 C60.573,70.276 60.521,70.197 60.470,70.119 C60.114,69.878 59.187,67.398 59.175,66.600 C59.173,66.455 59.282,66.057 59.274,65.930 C59.043,65.286 58.812,64.642 58.581,63.998 C57.950,61.644 57.197,59.440 56.574,57.081 C54.930,57.619 53.406,58.634 51.621,59.214 C52.491,62.049 53.361,64.884 54.230,67.719 C54.199,68.273 53.531,68.754 53.471,69.022 C53.614,69.566 53.758,70.111 53.901,70.655 C54.484,71.201 54.584,73.343 55.024,74.220 C56.373,76.903 56.577,80.422 57.919,83.109 C58.418,84.108 58.077,84.964 57.191,85.231 C57.018,85.096 56.709,85.083 56.562,84.937 C55.629,84.008 55.564,81.615 54.864,80.237 C54.286,79.101 54.178,77.558 53.564,76.351 C53.181,75.599 53.124,74.586 52.690,73.732 C52.120,72.613 51.748,71.181 51.390,69.846 C50.917,69.717 50.224,69.521 49.915,69.132 C48.967,66.349 48.018,63.565 47.070,60.781 C47.013,60.796 46.956,60.812 46.898,60.827 C46.779,60.784 46.736,60.798 46.532,60.831 C47.009,62.509 48.065,64.053 48.018,65.771 C47.991,66.727 48.940,67.670 48.200,68.205 C47.991,68.476 47.851,68.423 47.449,68.495 C46.453,67.551 44.970,63.045 44.704,61.221 C41.989,61.917 39.417,62.138 37.086,62.310 C36.452,62.356 35.029,63.493 34.539,63.808 C33.779,64.298 33.004,64.689 32.314,65.130 C31.935,65.322 31.557,65.513 31.178,65.705 C31.005,65.875 31.002,66.190 30.907,66.420 C30.471,67.479 29.644,68.502 29.180,69.633 C28.877,70.111 28.574,70.589 28.271,71.067 C28.212,71.208 28.284,71.343 28.190,71.457 C27.977,71.715 27.086,72.256 26.996,72.507 C27.072,72.793 27.147,73.080 27.223,73.366 C27.820,73.928 27.921,75.123 28.355,75.917 C29.059,77.209 29.453,78.732 30.198,80.120 C30.618,80.902 31.067,81.783 31.352,82.757 C30.406,84.630 29.459,86.504 28.513,88.377 C28.348,88.363 28.425,88.383 28.319,88.336 C27.854,88.362 27.506,88.305 27.341,87.767 C26.717,87.163 26.396,85.336 25.987,84.722 C25.085,83.369 24.584,81.497 23.551,79.665 C21.626,76.248 20.111,71.899 18.236,68.565 C17.104,66.552 16.582,64.295 15.510,62.757 C15.324,62.285 15.139,61.813 14.953,61.341 C14.520,60.553 14.059,59.528 13.626,58.749 C13.417,58.372 13.573,58.143 13.400,57.889 C12.916,57.179 10.413,56.076 9.576,55.588 C7.784,54.544 6.693,53.187 5.150,51.699 C4.534,51.106 3.696,50.302 3.267,49.437 C3.227,49.357 3.345,49.171 3.240,48.985 C2.857,48.308 2.203,47.127 1.872,46.588 C1.820,46.502 1.984,46.393 1.868,46.221 C1.530,45.722 0.469,44.015 0.491,43.091 C0.527,41.636 -0.189,39.784 0.127,38.223 C1.332,32.276 2.599,26.244 5.496,21.273 C5.770,20.802 6.237,20.525 6.559,20.074 C6.616,19.993 6.585,19.776 6.640,19.685 C6.925,19.215 7.359,18.602 7.721,18.205 C7.976,17.924 8.336,17.827 8.553,17.526 C8.617,17.437 8.549,17.223 8.634,17.137 C8.749,17.107 8.863,17.076 8.978,17.046 C8.984,16.953 8.990,16.859 8.996,16.766 C9.110,16.736 9.225,16.705 9.340,16.675 C9.423,16.589 9.672,16.079 9.720,16.023 C9.965,15.739 10.329,15.719 10.574,15.430 C10.580,15.337 10.586,15.243 10.592,15.150 C10.757,15.076 10.921,15.002 11.085,14.928 C11.091,14.835 11.097,14.741 11.103,14.648 C11.353,14.357 11.888,13.932 12.148,13.729 C12.291,13.691 12.435,13.653 12.578,13.615 C12.979,13.196 13.241,12.731 13.921,12.434 C13.277,9.893 11.906,7.397 11.046,5.011 C11.124,4.960 11.202,4.908 11.281,4.857 C11.419,4.685 11.639,4.596 11.923,4.504 C12.741,5.245 13.946,5.539 14.769,6.236 C14.952,6.390 14.933,6.795 15.145,6.964 C15.414,7.178 16.393,7.054 16.765,7.180 C17.378,7.389 17.332,7.765 18.321,7.506 C18.383,7.220 19.142,6.877 19.262,6.890 C20.125,6.843 20.458,7.765 21.321,7.726 C21.387,7.535 23.328,6.513 23.546,6.404 C23.726,6.388 23.905,6.371 24.085,6.354 C25.142,5.577 27.455,5.028 28.672,4.226 C29.063,3.968 29.527,4.328 29.984,3.972 C29.968,3.915 29.953,3.858 29.938,3.800 C30.075,3.705 30.649,3.705 30.649,3.705 C30.849,3.652 31.050,3.599 31.250,3.547 C31.235,3.489 31.220,3.432 31.205,3.375 C31.486,3.178 32.660,3.144 33.245,2.745 C33.931,2.277 35.101,2.490 35.611,2.305 C37.237,1.718 39.125,1.610 40.750,1.227 C40.794,1.114 41.393,1.275 41.741,1.149 C42.757,0.782 43.891,0.888 44.863,0.786 C44.888,0.718 45.476,0.777 45.767,0.732 C45.802,0.642 46.375,0.752 46.672,0.677 C46.722,0.627 49.085,0.536 49.581,0.554 C54.531,0.728 58.996,1.592 63.069,3.250 C63.402,3.468 63.736,3.687 64.069,3.905 C65.555,4.516 67.090,5.441 68.327,6.460 C69.030,7.038 70.100,8.218 70.898,8.540 C71.730,8.876 72.558,9.055 73.409,9.349 C74.002,9.553 74.714,10.071 75.359,10.122 C76.124,10.183 78.755,9.424 79.336,9.166 C79.271,8.879 79.245,8.631 79.327,8.433 C79.490,8.248 79.998,8.153 80.335,8.075 C80.846,8.236 81.617,7.716 82.226,7.577 C82.816,7.441 84.447,7.332 84.913,6.960 C84.898,6.903 84.883,6.846 84.868,6.788 C85.241,6.690 85.613,6.592 85.986,6.494 C86.088,6.567 85.981,6.503 86.094,6.557 C86.701,8.173 87.079,10.777 87.142,12.624 C87.202,14.400 87.797,16.103 87.854,17.768 C88.238,20.271 88.622,22.774 89.006,25.278 C89.063,26.977 89.679,28.706 89.741,30.507 C89.840,33.418 90.559,36.712 90.957,39.655 Z"/>
         </svg>,
        },
        {
          name: "Klios",
          type: LocationType.Moon,
          worldAffiliation: WorldAffiliation.Natural,
          icon: <IoSnow />,
          typeText: "Frozen Moonlet",
          flavorText: "Of course it was always there, silly! You should stop playing so many lasercast games, they're melting your brain.",
          description:
            "A tiny moon consisting primarily of frozen carbon dioxide. It was an ideal location for several data centers.",
          color: "#8fbeff",
          colorSecondary: "#b0e6ff",
          distance: 66,
          radius: 5,
          startingAngle: 320,
          children: [],
        },
      ],
    },
    {
      id: "earth",
      name: "Earth",
      typeText: "Wasted World",
      type: LocationType.Planet,
      worldAffiliation: WorldAffiliation.Natural,
      flavorText:
            "Birthplace of humanity, cybernetics, and the esteemed Oakmont QUIKBREW E-90 Coffee Brewer. We would visit more often, but her landscape has not remained the same for more than several minutes.",
          description:
            "",
      color: "#19b1ff",
      colorSecondary: "#83fbff",
      distance: 205,
      radius: 14,
      startingAngle: 340,
      isImportant: true,
      icon: <IoHeart />,
      children: [
        {
          name: "Seventh Orbital",
          typeText: "Home of the Machine World",
          flavorText:
            "When mankind vanished, they left behind an incomplete orbital near Earth. The constructors, given no signal to stop, expanded it well beyond its original specifications - until it became the fractal labyrinth, the conjunction of the machine world.",
          icon: <svg 
            width="134px" height="83px">
           <path fill-rule="evenodd"  fill="rgb(70, 255, 255)"
            d="M121.812,37.945 L113.647,36.312 L57.688,36.861 L56.818,41.211 L71.189,41.211 L72.822,42.844 L64.657,44.477 L42.203,44.477 L42.649,46.264 L113.647,47.743 L113.647,51.009 L64.657,51.009 L61.391,52.642 L55.738,53.270 L59.757,54.275 L58.125,57.541 L74.455,55.908 L94.051,55.908 L95.684,57.541 L80.987,60.807 L74.455,64.073 L38.529,67.339 L36.895,62.440 L36.895,80.403 L33.630,82.036 L14.033,80.403 L12.400,60.807 L14.033,59.174 L12.400,44.477 L10.768,42.844 L0.969,42.844 L0.969,41.211 L9.134,39.578 L10.768,36.312 L10.768,24.881 L10.768,3.652 L35.263,0.386 L38.529,2.019 L38.529,16.716 L45.061,18.349 L51.592,21.615 L87.519,24.881 L90.785,23.248 L95.684,23.248 L97.317,26.514 L107.115,31.413 L133.243,33.046 L133.243,36.312 L121.812,37.945 Z"/>
           </svg>,
          description: "",
          type: LocationType.Site,
          subType: SiteSubtype.MachineMade,
          worldAffiliation: WorldAffiliation.MachineEra,
          distance: 35,
          startingAngle: 150,
        },
        
        {
          name: "Deadlock",
          typeText: "Broken Reality",
          flavorText:
            "The convergence of all concepts from all realities; dissonance in material form.",
          type: LocationType.Field,
          fieldShape: FieldShape.Earth,
          fieldLabelOffset: {x: 0, y: -50},
          distance: 22,
          startingAngle: 25,
          children: [
            {
              name: "Whisper W-01108",
              typeText: "Transmission of Unknown Origin",
              flavorText: "This is Unity Space Traffic Control, paging unknown vessel in sector T81. Your transponder codes are unknown to us. Do you read me?",
              description: "",
              type: LocationType.Site,
              subType: SiteSubtype.Beacon,
              worldAffiliation: WorldAffiliation.Anomaly,
              distance: 25,
              startingAngle: 20,
            },
            {
              name: "Convergence of Spaces",
              typeText: "Dimensional Panopticon",
              flavorText: "We finally reached it beyond a thousand folds: an abyss from which all could be seen, even ourselves at every stage. And at the infinite end was ░░░░░░, so incomprehensible we dared not remember it, and something else... a presence, not our own.",
              type: LocationType.Site,
              subType: SiteSubtype.PointOfInterest,
              worldAffiliation: WorldAffiliation.Anomaly,
              distance: 45,
              startingAngle: 340,
            },
          ]
        },
        {
          name: "Luna",
          type: LocationType.Moon,
          typeText: "Lifeless Spaceport World",
          flavorText: "Luna may be dead, but she serves a critical purpose to mankind nonetheless; she is our stewardess among the heavens.",
          color: "#ffd3a3",
          colorSecondary: "#d1a97b",
          distance: 66,
          radius: 5,
          startingAngle: 50,
          children: [
            {
              name: "Mooncable",
              typeText: "Space Elevator Hub",
              flavorText: "Ladies and gentlemen, Cosmoflot 4510 to Venus is now boarding at Terminal F82. Update: all [NULL] passengers have now safely boarded and the gate has closed. Have an efficient day!",
              description: "A grand cosmodrome far above the lunar surface sends off hundreds of Pan Sol and Cosmoflot spaceplanes to the furthest corners of the System, even today.",
              type: LocationType.Site,
              subType: SiteSubtype.Outpost,
              worldAffiliation: WorldAffiliation.HumanEra,
              distance: 29,
              startingAngle: 20,
            },
          ],
        },
      ],
    },
    {
      name: "Mars",
      type: LocationType.Planet,
      worldAffiliation: WorldAffiliation.Natural,
      icon: <GiSandSnake />,
      typeText: "Arid Desert World",
      flavorText:
        "Filled to the brim with towering combat robots and even-larger sand serpents. Mars really wants to be left alone... but their treasures are too powerful to resist.",
      color: "#ff472b",
      colorSecondary: "#ff712b",
      distance: 245,
      radius: 11,
      startingAngle: 74,
      ringWidth: 40,
      isImportant: true,
      children: [
        {
          name: "Kojo Terminus",
          typeText: "Tactical Military Station",
          flavorText: "The sanguine world was the dominion of the Pact, overseen by all-seeing Terminus, enforced by orbital drop.",
          description: "",
          icon: <svg 
          viewBox="0 0 105 105"
          width="105px" height="105px">
         <path fill-rule="evenodd"  fill="rgb(255, 78, 24)"
          d="M14.645,91.381 L13.350,89.049 C13.350,89.049 25.974,54.805 28.633,49.158 C28.429,48.920 24.230,51.748 24.230,51.748 L24.230,53.044 L22.416,53.562 L21.898,53.562 L21.898,54.339 L20.085,55.116 L19.567,54.598 L18.272,55.893 C18.272,55.893 18.070,58.981 15.681,57.447 C12.338,59.626 6.356,63.405 6.356,63.405 L2.989,65.736 L2.730,66.513 L1.694,66.513 L0.398,65.995 L0.398,65.218 L1.176,64.700 L1.694,64.959 L14.904,55.893 L15.681,55.116 L17.236,54.857 L29.669,46.050 C29.669,46.050 38.070,29.035 41.326,27.917 C43.968,28.377 44.434,28.694 44.434,28.694 L44.693,34.652 L48.320,33.875 L53.500,27.917 L54.277,27.917 L57.904,14.966 L58.422,13.929 L59.199,13.929 L59.458,12.116 L58.681,11.857 L58.681,10.562 L60.235,7.972 L60.753,2.014 L61.530,0.719 C61.530,0.719 63.595,1.089 63.344,2.532 C63.093,3.975 62.567,4.086 62.567,4.086 C62.567,4.086 63.210,4.259 63.085,5.899 C62.959,7.540 61.789,8.749 61.789,8.749 L60.494,14.448 L60.494,16.002 L58.163,27.399 L58.163,29.212 L58.422,28.694 L58.940,26.363 L60.235,26.104 L61.271,27.658 L62.048,32.580 L63.603,32.580 L66.970,25.586 L68.006,25.068 L72.410,27.140 C72.410,27.140 72.798,35.296 72.928,36.983 C73.058,38.671 72.410,49.158 72.410,49.158 L76.036,55.893 C76.036,55.893 77.622,54.616 78.109,54.857 C78.596,55.097 79.922,56.152 79.922,56.152 L78.109,59.001 L81.476,65.218 C81.476,65.218 82.271,65.053 82.253,65.218 C82.235,65.384 82.253,66.772 82.253,66.772 L100.645,96.820 L101.940,96.820 L104.789,100.188 L104.271,102.001 L104.789,103.296 L103.753,104.591 L102.458,103.814 L101.940,103.814 L100.904,102.001 L101.163,101.483 L80.699,67.809 L79.404,67.031 L79.922,65.995 L78.886,64.441 L78.109,64.441 L77.850,63.405 L78.368,63.146 L73.705,54.598 L72.669,54.598 L72.151,53.821 L72.669,52.785 L71.892,51.748 L71.633,52.007 L70.338,66.254 L67.747,90.863 L66.970,91.381 L63.603,91.381 L62.826,90.863 L58.940,81.278 L59.458,59.001 L56.868,61.333 L55.055,70.399 L49.356,99.670 L48.579,100.188 L46.247,99.929 L44.693,98.634 L44.434,64.441 L38.476,57.965 L24.489,82.055 L16.459,91.381 L14.645,91.381 Z"/>
         </svg>,
          type: LocationType.Site,
          subType: SiteSubtype.Outpost,
          worldAffiliation: WorldAffiliation.HumanEra,
          humanEraAffiliation: HumanEraAffiliation.RisingPact,
          distance: 21,
          startingAngle: 240,
        },
        {
          id: "prometheus",
          name: "Prometheus",
          typeText: "Joint Venture Orbital",
          flavorText:
            "The ark remains still and silent, waiting for a nuclear armageddon that may never come.",
          icon: <svg 
          width="51px" height="156px" viewBox="0 0 51 156">
<path fill-rule="evenodd"  fill="rgb(255, 78, 24)"
 d="M9.173,99.083 C0.981,97.146 0.909,87.467 0.636,86.113 C0.527,85.575 0.814,84.789 0.882,84.389 C0.949,84.002 0.701,83.457 0.636,83.158 C0.745,83.158 0.855,83.158 0.964,83.158 C0.970,82.242 1.943,73.455 8.517,72.979 C8.623,72.641 8.412,72.625 8.845,72.568 C8.845,72.650 8.845,72.732 8.845,72.815 C9.237,72.741 9.804,72.494 9.830,71.994 C10.049,72.021 10.268,72.048 10.487,72.076 C10.546,71.786 10.588,71.872 10.651,71.583 C10.481,71.494 10.334,71.308 10.158,71.255 C9.895,71.175 9.659,71.392 9.502,71.337 C9.221,71.239 9.101,70.858 8.681,70.762 C8.550,70.986 8.694,70.830 8.435,70.844 C8.435,70.680 8.435,70.516 8.435,70.352 C8.352,70.352 8.270,70.352 8.188,70.352 C8.052,70.171 7.955,70.186 7.860,69.941 C7.643,69.599 7.778,68.638 7.778,68.135 C7.778,66.812 7.512,63.829 7.860,62.800 C8.349,62.896 9.698,63.003 9.994,62.635 C10.436,62.979 12.105,62.722 12.949,62.718 C13.293,61.687 13.038,59.376 13.032,58.120 C12.676,58.066 12.320,58.011 11.964,57.956 C11.937,45.206 11.910,32.452 11.882,19.702 C11.882,15.407 11.882,11.110 11.882,6.814 C11.882,4.732 11.603,2.039 12.046,0.247 C12.074,0.247 12.101,0.247 12.129,0.247 C12.289,0.410 12.831,0.414 13.278,0.329 C13.433,0.300 14.611,-0.008 14.920,0.083 C15.225,0.172 15.433,0.333 15.987,0.329 C15.987,0.439 15.987,0.548 15.987,0.658 C16.477,0.736 16.756,0.902 17.464,0.904 C17.464,0.986 17.464,1.068 17.464,1.150 C17.615,1.256 17.605,1.312 17.793,1.396 C17.999,1.585 18.361,1.573 18.778,1.561 C18.778,1.670 18.778,1.779 18.778,1.889 C19.318,1.959 19.349,2.210 20.091,2.217 C20.091,2.327 20.091,2.436 20.091,2.546 C20.642,2.682 20.732,2.848 21.405,2.874 C21.405,2.956 21.405,3.038 21.405,3.120 C22.563,3.358 23.610,4.054 24.606,4.516 C24.819,7.629 24.688,11.115 24.688,14.367 C24.688,20.194 24.688,26.024 24.688,31.852 C24.688,37.625 24.688,43.400 24.688,49.173 C24.688,52.397 24.820,55.855 24.606,58.941 C24.305,58.969 24.004,58.996 23.703,59.023 C23.703,60.227 23.703,61.432 23.703,62.635 C24.664,62.718 37.276,64.250 37.987,64.277 C39.517,64.592 41.814,64.759 43.733,64.688 C43.766,65.114 43.782,65.348 43.733,65.755 C41.770,65.984 40.009,65.483 37.905,65.426 C37.982,66.634 38.113,71.178 37.412,71.501 C37.324,71.439 37.335,71.452 37.166,71.419 C37.159,71.692 37.126,71.791 37.084,71.994 C36.742,72.057 36.785,72.036 36.756,72.404 C46.402,73.352 45.559,83.768 45.129,85.867 C44.951,86.734 45.297,95.432 37.823,97.277 C37.804,97.659 37.700,97.839 37.576,98.098 C37.494,98.098 37.412,98.098 37.330,98.098 C37.330,98.180 37.330,98.262 37.330,98.345 C37.467,98.345 37.604,98.345 37.741,98.345 C37.862,100.115 37.822,101.897 37.823,103.762 C37.964,103.812 38.081,103.836 38.315,103.845 C38.780,103.466 40.866,103.414 41.763,103.188 C43.578,102.731 45.532,102.606 47.427,102.121 C48.439,101.862 49.569,101.580 50.629,101.792 C50.645,102.174 50.742,102.374 50.875,102.613 C50.793,102.613 50.711,102.613 50.629,102.613 C50.629,102.695 50.629,102.777 50.629,102.859 C50.574,102.859 50.519,102.859 50.465,102.859 C50.028,103.238 49.324,103.092 48.659,103.270 C47.603,103.551 26.274,108.252 25.017,108.606 C24.599,108.723 23.883,108.688 23.703,109.016 C23.703,109.919 23.703,110.822 23.703,111.725 C23.792,111.800 23.710,111.719 23.785,111.807 C24.084,111.828 24.451,111.877 24.606,112.054 C24.889,112.762 24.688,114.774 24.688,115.912 C24.688,118.921 24.688,121.932 24.688,124.942 C24.688,135.229 24.688,145.520 24.688,155.807 C20.502,155.807 16.315,155.807 12.129,155.807 C12.086,146.382 12.046,135.508 12.046,125.434 C12.046,122.780 12.046,120.125 12.046,117.471 C12.046,116.424 12.229,114.839 11.800,114.188 C12.055,114.087 11.986,114.157 12.046,113.860 C12.437,113.830 12.478,113.734 12.867,113.695 C12.867,113.586 12.867,113.476 12.867,113.367 C12.949,113.367 13.032,113.367 13.114,113.367 C12.990,112.279 13.031,110.892 13.032,109.673 C12.977,109.673 12.922,109.673 12.867,109.673 C12.580,109.499 10.773,109.499 10.405,109.673 C10.369,109.651 10.250,109.432 10.240,109.427 C10.200,109.406 8.074,109.342 7.860,109.345 C7.860,106.937 7.860,104.528 7.860,102.121 C7.997,102.121 8.134,102.121 8.270,102.121 C8.312,101.749 8.429,101.711 8.517,101.382 C8.763,101.355 9.009,101.327 9.255,101.300 C9.283,101.190 9.310,101.081 9.337,100.971 C9.994,100.780 10.651,100.588 11.308,100.397 C11.308,100.315 11.308,100.233 11.308,100.151 C11.099,100.031 11.215,100.168 11.143,99.904 C10.699,99.873 10.723,99.697 10.487,99.576 C10.141,99.399 9.538,99.678 9.255,99.494 M50.711,101.382 C50.777,101.466 50.740,101.404 50.793,101.546 C50.766,101.546 50.738,101.546 50.711,101.546 C50.711,101.491 50.711,101.437 50.711,101.382 ZM50.629,101.546 C50.695,101.630 50.658,101.569 50.711,101.710 C50.683,101.710 50.656,101.710 50.629,101.710 C50.629,101.656 50.629,101.601 50.629,101.546 Z"/>
</svg>,
          type: LocationType.Site,
          subType: SiteSubtype.Orbital,
          worldAffiliation: WorldAffiliation.HumanEra,
          distance: 38,
          startingAngle: 360,
        },
        {
          name: "Hikari Lightwave 901",
          typeText: "Laser Relay Satellite",
          flavorText: "Data courses through the system like coolant through an interfacer's body.",
          icon: <svg 
          viewBox="0 0 73 89"
          width="73px" height="89px">
         <path fill-rule="evenodd"  fill="rgb(255, 78, 24)"
          d="M14.877,45.302 L16.634,40.031 L4.919,42.081 L0.818,41.788 L0.818,40.909 L1.697,40.323 L19.563,36.223 L37.721,32.416 L38.014,31.830 L43.700,30.658 L42.821,30.365 L42.821,27.144 L45.164,26.265 L50.729,2.078 L50.729,1.199 L51.608,0.613 L72.109,5.299 L72.109,8.228 L71.231,9.107 L70.938,10.571 L65.838,37.980 L66.130,41.788 L61.151,49.645 L60.000,49.1000 L60.000,48.1000 L60.244,50.453 L62.001,59.875 L62.001,61.340 L63.465,61.632 L68.151,78.912 L68.737,79.205 L69.030,80.962 L51.486,88.356 L49.436,88.063 L49.143,86.598 L50.608,86.013 L51.194,85.134 L47.386,75.469 L46.800,73.419 L42.114,59.946 L41.529,57.018 L42.700,53.796 L37.721,55.260 L31.278,78.983 L29.813,79.276 L28.642,78.105 L28.935,75.469 L34.914,57.189 L34.207,55.553 L19.563,58.189 L18.684,57.310 L14.877,46.767 L14.877,45.302 Z"/>
         </svg>,
          type: LocationType.Site,
          subType: SiteSubtype.Beacon,
          worldAffiliation: WorldAffiliation.HumanEra,
          distance: 50,
          startingAngle: 130,
        },
      ],
    },
    {
      name: "Phaeton Belt",
      type: LocationType.AsteroidBelt,
      worldAffiliation: WorldAffiliation.Natural,
      flavorText: "Also known by its original name, the Asteroid Belt. The destruction of Phaeton is known to have occured some time in the last billion years.",
      distance: 350,
      radius: 15,
      startingAngle: 44,
      children: [
        {
          name: "Heavenbreaker Cache 80-IV",
          typeText: "Stockpile of Nuclear Missiles",
          flavorText:
            "They sleep amidst the cold asteroids, waiting for their final order from DAWNLIGHT VIGIL.",
          icon: <svg 
          viewBox="0 0 101 75"
          width="101px" height="75px">
         <path fill-rule="evenodd"  fill="rgb(255, 78, 24)"
          d="M99.910,4.375 C100.534,5.654 96.601,10.460 96.601,10.460 L90.681,13.879 L89.783,15.968 L89.230,15.554 C89.328,15.877 89.407,16.182 89.460,16.462 C89.015,16.435 88.604,16.393 88.210,16.343 L88.441,16.743 L87.737,17.672 L85.172,19.677 L85.149,21.784 L76.685,31.383 L68.931,35.860 L67.857,35.432 L61.964,38.835 L61.797,39.978 L56.456,43.062 C56.498,43.220 56.542,43.375 56.587,43.524 C54.888,44.368 53.178,44.347 51.504,43.644 L51.138,47.179 L48.160,48.375 L46.503,51.950 L53.326,48.010 L54.173,48.045 L54.089,48.617 L44.785,53.988 L44.618,55.132 L37.795,59.071 L37.699,59.004 C35.029,59.415 32.560,59.724 30.052,58.870 L23.566,66.239 C23.566,66.239 21.787,66.961 20.080,65.634 C20.080,68.002 17.182,69.925 17.182,69.925 L17.033,69.705 C16.213,69.858 14.125,69.978 12.786,67.658 C11.091,64.722 11.518,61.462 11.518,61.462 L11.985,61.192 C12.407,60.748 13.100,60.085 13.794,59.713 C13.450,59.428 13.129,59.134 12.832,58.830 L12.135,59.751 L11.992,59.694 L11.884,60.096 C11.884,60.096 10.206,59.189 9.018,57.132 C7.830,55.075 7.884,53.167 7.884,53.167 L8.022,53.344 L7.744,52.862 L7.828,52.290 L8.985,52.146 L9.340,51.756 C9.265,51.328 9.207,50.907 9.166,50.493 C8.377,51.301 6.499,51.714 6.020,51.808 L6.018,51.935 C6.018,51.935 2.595,52.007 0.920,49.105 C-0.453,46.728 1.070,43.999 1.665,43.090 L1.540,42.832 C1.540,42.832 4.656,41.284 6.707,42.467 C6.412,40.325 7.926,39.145 7.926,39.145 L18.227,37.076 C18.966,33.223 20.952,30.813 21.258,30.460 L21.253,30.404 L28.079,26.463 L29.153,26.890 L38.461,21.516 L38.998,21.730 L38.604,22.481 L31.778,26.421 L35.704,26.772 L38.232,24.790 L42.918,26.883 C43.423,24.804 44.252,23.305 44.505,22.876 L44.218,22.380 L49.803,19.156 L50.877,19.583 L56.772,16.179 L56.939,15.036 L64.695,10.558 L77.247,8.023 L79.084,9.056 L82.103,7.837 L83.261,7.692 L83.633,8.337 C84.215,7.215 84.826,6.435 84.826,6.435 L85.141,6.980 L86.863,7.183 L92.786,3.763 C92.786,3.763 98.915,2.761 99.710,3.941 C100.619,5.158 100.133,4.894 99.910,4.375 ZM45.077,10.150 C43.883,10.012 44.023,9.208 44.023,9.208 C44.023,9.208 45.300,7.377 47.850,5.990 C50.399,4.602 62.401,-0.249 62.548,0.163 C62.695,0.575 46.159,9.486 45.077,10.150 ZM39.708,68.531 C41.539,67.359 53.149,61.703 53.411,62.105 C54.288,63.450 41.137,71.313 38.099,73.005 C35.061,74.698 34.072,75.141 33.059,73.964 C32.046,72.788 36.359,70.677 39.708,68.531 Z"/>
         </svg>,
          type: LocationType.Site,
          subType: SiteSubtype.Danger,
          worldAffiliation: WorldAffiliation.HumanEra,
          distance: -30,
          startingAngle: 50,
        },
        {
          name: "Slingshot",
          typeText: "Babylon-Class Cargo Supergun",
          flavorText: "Hundred thousand tons of pure gun... to launch parcels between worlds. Next-year shipping!",
          type: LocationType.Site,
          subType: SiteSubtype.Outpost,
          worldAffiliation: WorldAffiliation.HumanEra,
          distance: -48,
          startingAngle: 290,
        },
        {
          name: "БАШ Autofactory",
          typeText: "Manufacturing Complex",
          flavorText: "If it's going to end up in space anyway, might as well built it there.",
          type: LocationType.Site,
          subType: SiteSubtype.Factory,
          worldAffiliation: WorldAffiliation.HumanEra,
          distance: -28,
          startingAngle: 265,
        },
        {
          name: "Sōtenami Debris",
          typeText: "Out-of-place Building",
          flavorText: "Somewhere out in the Belt, Hokota Group's elegant corporate complex floats in space, surrounding by a cloud of Martian debris and dust. By all accounts, it isn't where it's supposed to be.",
          type: LocationType.Site,
          subType: SiteSubtype.Wreck,
          worldAffiliation: WorldAffiliation.HumanEra,
          distance: 10,
          startingAngle: 174,
        },
        {
          name: "Argos 51-9",
          typeText: "Mining Machine Collective",
          flavorText: "Countless robotic collectives continue to wander the asteroids, searching for minerals to fulfill a long-forgotten quota.",
          type: LocationType.Site,
          subType: SiteSubtype.Vessel,
          worldAffiliation: WorldAffiliation.MachineEra,
          distance: -30,
          startingAngle: 285,
        },
        {
          name: "Phaeton",
          typeText: "Planet Core",
          flavorText: "The final shard of a world that exploded many eons ago. Rich in metals, delicious to mining robots.",
          type: LocationType.Site,
          subType: SiteSubtype.Asteroid,
          worldAffiliation: WorldAffiliation.Natural,
          distance: -41,
          startingAngle: 185,
        },
        {
          name: "Ceres",
          typeText: "Dwarf Planet",
          flavorText: "Largest asteroid ever detected. Some unusual cryogenic life forms, but never of enough interest to be colonized by man.",
          type: LocationType.Site,
          subType: SiteSubtype.Asteroid,
          worldAffiliation: WorldAffiliation.Natural,
          distance: -58,
          startingAngle: 38,
        },
      ],
      classes: "asteroid-belt",
    },
    {
      name: "Jupiter",
      type: LocationType.Planet,
      worldAffiliation: WorldAffiliation.Natural,
      typeText: "Radioactive Gas Giant",
      flavorText: "Many consider it to be the gassiest of the gas giants.",
      color: "#fa9941",
      colorSecondary: "#ffcc91",
      distance: 385,
      radius: 31,
      startingAngle: 132,
      children: [
        // stations
        {
          id: "gorsk",
          name: "Great Gorsk",
          typeText: "Monolithic People's Orbital",
          flavorText:
            "Hush! Do not disturb the Celestial Gardener, they are busy with the collection of melodies.",
          description:
            "The Union's enormous, encapsulated Gorsk provides the System with much of its fusion fuel. Gorsk served a dual purpose as the site of numerous collectivist experiments, including the moneyless program. The mastermind in charge, known as VOLOS to the simulant robot population, has been deluded into believing mankind still exists. The entire system is slowly collapsing into Jupiter.",
          icon: <svg 
          viewBox="0 0 79 131"
          width="79px" height="131px">
         <path fill-rule="evenodd"  fill="rgb(255, 78, 24)"
          d="M77.057,23.413 C77.025,24.111 76.993,24.809 76.962,25.507 C76.573,27.010 75.663,28.499 75.629,30.265 C75.502,30.265 75.376,30.265 75.249,30.265 C75.027,30.772 74.805,31.280 74.583,31.787 C76.724,32.440 78.755,36.120 77.913,39.400 C77.625,40.521 77.165,40.862 77.152,42.445 C76.835,42.445 76.517,42.445 76.200,42.445 C76.028,42.754 75.889,42.967 75.820,43.397 C75.598,43.397 75.375,43.397 75.153,43.397 C75.153,43.555 75.153,43.714 75.153,43.872 C74.234,43.820 74.132,44.088 73.536,44.443 C71.760,44.443 69.983,44.443 68.207,44.443 C66.570,44.515 65.414,43.496 64.210,43.302 C63.931,43.962 63.168,45.834 62.688,45.966 C62.656,46.188 62.624,46.410 62.592,46.632 C62.411,46.510 62.497,46.525 62.212,46.442 C62.009,46.720 61.426,46.772 61.260,47.013 C61.260,49.867 61.260,52.723 61.260,55.577 C61.228,55.736 61.197,55.894 61.165,56.053 C60.811,56.138 60.431,56.389 60.213,56.624 C59.738,57.408 60.501,59.807 60.404,61.096 C60.164,64.271 60.094,67.750 60.118,71.088 C59.704,71.270 59.636,71.480 59.071,71.564 C58.899,71.342 59.041,71.445 58.691,71.374 C58.398,70.177 58.400,68.406 58.405,66.806 C58.279,66.806 58.152,66.806 58.025,66.806 C57.993,73.942 57.961,81.081 57.930,88.217 C57.930,91.413 58.663,95.864 57.739,98.494 C57.390,98.549 57.464,98.553 57.263,98.684 C57.181,96.488 57.115,94.020 57.263,91.738 C57.295,90.152 57.327,88.566 57.359,86.980 C57.390,85.648 57.422,84.315 57.454,82.983 C57.422,81.1000 57.390,81.016 57.359,80.033 C57.356,76.705 57.131,72.973 57.549,69.946 C57.517,67.536 57.485,65.125 57.454,62.714 C57.454,61.826 57.715,60.644 56.978,60.430 C56.634,60.681 56.485,60.547 56.122,60.716 C56.090,65.283 56.058,69.852 56.026,74.419 C55.995,75.053 55.963,75.688 55.931,76.322 C55.736,76.748 55.082,77.008 54.884,77.464 C54.916,81.016 54.948,84.569 54.980,88.122 C55.075,97.256 55.170,106.393 55.265,115.528 C55.297,119.048 55.329,122.570 55.360,126.090 C55.360,127.364 55.610,129.411 54.884,129.992 C54.448,130.231 54.113,130.077 53.743,129.992 C52.263,124.524 53.779,116.860 53.076,110.579 C52.950,99.510 52.823,88.438 52.696,77.369 C52.537,77.369 52.379,77.369 52.220,77.369 C52.220,77.210 52.220,77.051 52.220,76.893 C51.968,76.763 51.760,76.614 51.649,76.322 C51.210,75.406 51.553,72.778 51.554,71.659 C51.554,67.948 51.554,64.236 51.554,60.525 C51.459,60.525 51.364,60.525 51.268,60.525 C51.237,60.557 51.205,60.589 51.173,60.621 C51.102,60.075 50.797,59.872 50.317,59.764 C50.222,59.796 50.126,59.828 50.031,59.859 C50.199,59.013 49.262,59.016 48.985,58.337 C49.131,58.043 49.006,57.598 48.889,57.290 C45.610,56.827 46.331,52.951 46.415,49.297 C46.384,48.345 46.352,47.393 46.320,46.442 C46.320,44.031 46.320,41.620 46.320,39.210 C46.590,38.984 46.647,39.216 46.701,38.734 C46.669,38.702 46.637,38.670 46.606,38.639 C40.768,38.588 37.573,34.978 34.901,31.502 C34.359,30.797 33.701,27.521 33.102,26.918 C33.099,26.923 33.096,26.929 33.093,26.934 C33.054,26.999 32.964,27.120 32.824,27.281 C32.755,27.419 32.686,27.557 32.617,27.695 C32.833,27.787 32.767,27.748 32.903,27.886 C31.791,27.938 30.678,29.472 29.762,29.884 C29.113,30.176 28.497,30.371 27.882,30.512 C25.249,31.513 21.552,32.107 16.630,31.216 C13.823,30.723 11.465,30.057 9.493,29.291 C9.429,29.295 9.366,29.302 9.303,29.313 C9.296,29.278 9.289,29.243 9.282,29.208 C7.035,28.315 5.303,27.292 3.993,26.252 C3.948,26.298 3.938,26.294 3.784,26.363 C3.801,26.264 3.801,26.173 3.788,26.087 C1.344,24.077 0.455,22.026 0.453,20.749 C0.452,20.129 0.603,19.296 1.001,18.404 C1.178,17.883 1.334,17.370 1.310,16.847 C1.373,16.815 1.436,16.784 1.500,16.752 C1.650,16.782 1.801,16.812 1.951,16.842 C1.959,16.832 1.967,16.822 1.976,16.811 C1.976,16.569 1.976,16.328 1.976,16.086 C2.226,16.055 2.477,16.023 2.728,15.992 C2.731,15.989 2.734,15.986 2.737,15.983 C2.737,15.922 2.737,15.861 2.737,15.800 C2.769,15.673 2.800,15.547 2.832,15.420 C3.114,15.415 3.349,15.372 3.554,15.300 C3.797,15.121 4.057,14.947 4.336,14.781 C4.375,14.741 4.413,14.700 4.450,14.658 C4.463,14.671 4.475,14.682 4.486,14.693 C6.735,13.404 10.138,12.589 15.203,13.041 C17.959,13.284 20.353,13.804 22.410,14.465 C22.611,14.475 22.788,14.500 22.911,14.563 C23.037,14.629 23.173,14.700 23.314,14.773 C24.345,15.142 25.285,15.544 26.134,15.961 C26.618,16.087 27.081,16.145 27.478,16.086 C27.542,16.213 27.605,16.340 27.669,16.466 C27.640,16.554 27.610,16.642 27.581,16.730 C27.594,16.737 27.607,16.744 27.620,16.752 C27.668,16.752 27.716,16.752 27.764,16.752 C28.081,16.815 28.398,16.879 28.716,16.942 C28.716,17.069 28.716,17.196 28.716,17.323 C28.957,17.603 29.665,18.062 29.953,18.275 C30.175,18.306 30.397,18.338 30.619,18.370 C31.153,18.801 31.220,19.494 32.046,19.702 C32.078,19.829 32.110,19.956 32.141,20.083 C32.183,20.183 32.219,20.266 32.259,20.335 C32.326,20.408 32.385,20.473 32.433,20.528 C32.509,20.577 32.607,20.611 32.747,20.634 C32.938,18.058 34.165,10.564 41.900,8.527 C42.167,8.416 42.428,8.303 42.627,8.154 C42.857,7.716 43.225,7.114 43.742,6.436 C43.946,6.050 44.104,5.722 44.131,5.618 C44.224,5.628 44.329,5.614 44.444,5.581 C46.570,3.173 50.389,0.326 56.312,0.289 C56.453,0.288 56.595,0.289 56.737,0.292 C57.948,0.184 59.478,0.177 60.689,0.480 C62.031,0.814 63.129,1.282 64.305,1.622 C64.686,1.653 65.067,1.685 65.447,1.717 C66.979,2.747 68.550,3.823 70.205,4.762 C70.149,4.963 70.589,5.522 71.162,6.121 C71.486,6.416 71.802,6.721 72.107,7.036 C72.631,7.510 73.119,7.896 73.345,7.997 C73.271,8.127 73.236,8.216 73.228,8.302 C73.499,8.637 73.759,8.982 74.007,9.337 C74.150,9.504 74.279,9.700 74.396,9.915 C76.002,12.410 77.029,15.364 77.152,18.750 C77.148,18.765 77.144,18.778 77.140,18.793 C77.342,20.305 77.356,21.863 77.057,23.413 Z"/>
         </svg>,
          type: LocationType.Site,
          subType: SiteSubtype.Orbital,
          worldAffiliation: WorldAffiliation.HumanEra,
          humanEraAffiliation: HumanEraAffiliation.GreaterUnion,
          distance: 45,
          startingAngle: 190,
        },
        {
          name: "Search For Everything",
          typeText: "Self-Replicating Interstellar Vessel",
          flavorText: "This is the first step towards an answer to the great mystery of the Everything... and ultimately, a conclusion to my hunt for the perfect efficiency of the valves at junction 54-889B.",
          description: "",
          worldAffiliation: WorldAffiliation.MachineEra,
          type: LocationType.Site,
          subType: SiteSubtype.Vessel,
          distance: 29,
          startingAngle: 340,
        },
        {
          name: "Introspect",
          typeText: "Uncertain Reality",
          flavorText: "It seems that it was here that the architect began their work. Unfortunately, they were somewhat indecisive, and now we'll learn to live with the results.",
          type: LocationType.Field,
          fieldShape: FieldShape.Jupiter,
          fieldLabelOffset: {x: 30, y: 80},
          distance: 155,
          startingAngle: 38,
          children: [
            {
              name: "Blade of Stars",
              typeText: "Anomalous Vessel of Glass",
              flavorText:
                "A tower of soaring glass appears in the skies over Callisto every few months before diving back into the fold. They only ever respond: DO NOT APPROACH US.",
              description: "",
              type: LocationType.Site,
              subType: SiteSubtype.Vessel,
              worldAffiliation: WorldAffiliation.MachinesOfGlass,
              distance: 45,
              startingAngle: 190,
            },
            {
              name: "Peculiar Angle",
              typeText: "Dimensional Fold",
              flavorText: "From a precise angle in space known to only a few machines, Callisto and Io appear as living worlds.",
              description: "",
              type: LocationType.Site,
              subType: SiteSubtype.PointOfInterest,
              worldAffiliation: WorldAffiliation.Anomaly,
              distance: 45,
              startingAngle: 340,
            },
          ]
        },
        // moons
        {
          name: "Io",
          typeText: "Molten Volcanic World",
          type: LocationType.Moon,
          flavorText: "It's the closest thing in the Solar System to hell. So... one could say we go to hell and back to obtain the crystalline lattice used in much of the System's digital technology.",
          color: "#ff730f",
          colorSecondary: "#ffaf24",
          distance: 86,
          radius: 6,
          startingAngle: 10,
          icon: <FaVolcano  />,
          children: [
            {
              name: "Bunker Hawk",
              typeText: "Coalition Arsenal Platform",
              flavorText: "It's just orbiting there... menacingly.",
              description: "",
              worldAffiliation: WorldAffiliation.HumanEra,
              type: LocationType.Site,
              subType: SiteSubtype.Danger,
              distance: 28,
              startingAngle: 330,
            },
            {
              name: "ALMAZ-6",
              typeText: "Union Arsenal Platform",
              flavorText: "The highest concentration of nuclear hellfire in a single structure.",
              description: "",
              icon: <svg 
              viewBox="0 0 98 93"
              width="98px" height="93px">
             <path fill-rule="evenodd"  fill="rgb(255, 78, 24)"
              d="M96.059,38.039 C96.059,38.039 96.137,43.878 94.750,47.197 C93.363,50.516 88.209,54.262 88.209,54.262 L81.667,55.832 L76.958,54.000 L73.294,50.599 L63.875,43.272 L62.043,44.319 L61.520,44.580 L60.735,45.889 L59.688,56.617 L59.165,57.402 L59.427,58.972 L58.903,59.495 L58.642,63.943 C58.642,63.943 57.864,66.135 56.548,66.298 C55.233,66.461 54.717,66.821 54.717,66.821 L54.717,75.194 C54.717,75.194 54.362,76.466 53.932,76.502 C53.502,76.539 52.624,76.241 52.624,76.241 L52.362,69.176 L51.839,69.176 C51.839,69.176 51.270,90.401 51.362,91.155 C51.454,91.910 50.959,92.807 50.315,92.725 C49.672,92.643 48.745,91.417 48.745,91.417 L48.175,69.699 C48.175,69.699 48.093,71.072 47.390,71.008 C46.688,70.944 45.323,70.297 45.036,67.345 C44.749,64.392 44.774,64.205 44.774,64.205 C44.774,64.205 42.449,63.811 42.157,63.158 C41.866,62.505 39.522,60.683 39.541,57.925 C39.560,55.167 39.541,55.047 39.541,55.047 L39.017,52.692 L39.017,50.860 L37.709,49.029 L37.186,48.244 L35.093,48.244 C35.093,48.244 33.673,53.306 32.999,53.738 C36.153,58.469 45.036,71.269 45.036,71.269 C45.036,71.269 45.219,72.639 44.512,72.578 C43.805,72.516 42.942,71.531 42.942,71.531 L31.429,55.308 L28.813,54.785 L28.290,52.953 L27.505,52.953 L26.458,54.000 L23.318,54.262 L21.487,52.953 L16.253,58.448 C16.253,58.448 15.546,58.169 15.468,57.925 C15.390,57.681 16.515,56.093 16.515,56.093 L20.440,52.168 C20.440,52.168 19.360,47.398 19.393,44.842 C13.275,45.346 0.554,46.935 0.554,46.935 C0.554,46.935 0.414,46.743 0.292,45.889 C0.171,45.034 0.039,43.880 1.339,43.534 L19.132,40.917 C19.132,40.917 19.598,31.067 22.010,30.713 C24.421,30.358 24.365,30.451 24.365,30.451 C24.365,30.451 22.761,11.202 20.440,2.977 C20.921,1.956 20.148,0.801 20.963,1.407 C21.778,2.014 21.748,2.192 21.748,2.192 C21.748,2.192 26.154,22.267 26.196,29.666 C26.582,30.032 26.458,30.189 26.458,30.189 L29.860,30.189 C29.860,30.189 32.679,31.340 33.261,32.544 C33.843,33.749 34.046,33.852 34.046,33.852 L36.924,34.114 L36.924,23.386 L36.139,22.340 C36.139,22.340 35.805,21.866 36.139,21.031 C36.474,20.197 37.971,19.461 37.971,19.461 L38.494,18.153 L39.481,17.956 C37.931,16.060 37.000,13.639 37.000,11.000 C37.000,4.925 41.925,0.000 47.1000,0.000 C54.075,0.000 59.000,4.925 59.000,11.000 C59.000,13.443 58.194,15.692 56.847,17.518 L57.857,17.630 L58.380,18.938 L58.903,19.461 L59.688,31.236 L58.903,31.759 L59.950,31.759 L60.212,30.974 L61.258,30.713 L62.043,31.236 L72.248,25.218 C72.248,25.218 74.069,21.442 75.126,21.293 C76.183,21.144 77.526,20.230 79.051,20.246 C80.576,20.262 89.517,21.816 89.517,21.816 C89.517,21.816 95.687,25.284 96.059,32.806 C96.898,33.986 97.472,34.471 97.367,35.684 C97.262,36.897 96.059,38.039 96.059,38.039 ZM63.352,32.544 C65.214,32.761 65.968,35.422 65.968,35.422 L70.416,35.684 C70.416,35.684 70.385,35.661 70.416,35.161 C70.317,31.628 71.201,28.096 71.201,28.096 L63.352,32.544 ZM70.678,40.394 L65.183,40.917 L64.921,41.441 L64.921,41.702 L71.201,46.412 C71.201,46.412 71.381,46.707 71.725,46.412 C70.898,43.908 70.678,40.394 70.678,40.394 Z"/>
             </svg>,
              worldAffiliation: WorldAffiliation.HumanEra,
              type: LocationType.Site,
              subType: SiteSubtype.Danger,
              distance: 32,
              startingAngle: 120,
            },
          ],
        },
        {
          name: "Europa",
          typeText: "Tropical Ocean World",
          flavorText: "Sunshine, cigars, and renown academies! Make your next scientific conference a Europan one. Just don't go diving deeper than a kilometer, comrade.",
          type: LocationType.Moon,
          color: "#38fcb1",
          colorSecondary: "#5cffe4",
          distance: 115,
          radius: 7,
          startingAngle: 259,
          isImportant: true,
          icon: <FaUmbrellaBeach />,
          children: [
            {
              id: "tian-pharmaceutical",
              name: "Tiān Pharmaceutical",
              typeText: "Genesis Zero-G Biolaboratory",
              flavorText: "Prepare yourself for the most horrific biological creations in the System. Prepare to witness... Human By Committee.",
              description: "",
              type: LocationType.Site,
              subType: SiteSubtype.Outpost,
              worldAffiliation: WorldAffiliation.HumanEra,
              distance: 30,
              startingAngle: 290,
            },
          ],
        },
        {
          name: "Ganymede",
          type: LocationType.Moon,
          icon: <FaQuestion />,
          typeText: "Unknown World",
          flavorText: "Nothing interesting ever happens on Ganymede; let's stop talking about it. Go look at Io or Europa instead...",
          color: "#e6d087",
          colorSecondary: "#b3b07b",
          distance: 145,
          radius: 6,
          startingAngle: 155,
          children: [],
        },
        {
          name: "Callisto",
          typeText: "Dark Oil World",
          flavorText: "This world is covered in so much oil that the Coalition claimed it twice, once for both hemispheres.",
          type: LocationType.Moon,
          icon: <FaDroplet />,
          color: "#bb76e8",
          colorSecondary: "#d442fc",
          distance: 175,
          radius: 7,
          startingAngle: 43,
          children: [
            
          ],
        },
      ],
    },
    {
      name: "Saturn",
      type: LocationType.Planet,
      typeText: "Ringed Gas Giant",
      flavorText: "Hear us, oh Golden One, rings so plentiful... please don't block the Sun's rays for just one day.",
      color: "#fac364",
      colorSecondary: "#ffeb96",
      distance: 475,
      radius: 26,
      startingAngle: 320,
      ringWidth: 110,
      children: [
        // stations
        {
          name: "Goldspire Archival Complex",
          typeText: "ALTITUDE Network Hub",
          flavorText: "You like information, correct? There is much information here.",
          description:
            "",
          type: LocationType.Site,
          subType: SiteSubtype.Beacon,
          worldAffiliation: WorldAffiliation.HumanEra,
          distance: 30,
          startingAngle: 310,
        },
        {
          name: "Equinox Tower",
          typeText: "Assembled Orbital",
          flavorText:
            "Orbital assembled from multiple private ventures purchased by Coalition's Heavenbreaker. Source of all the System's processed tetradite.",
          description:
            "",
          type: LocationType.Site,
          subType: SiteSubtype.Orbital,
          worldAffiliation: WorldAffiliation.HumanEra,
          distance: 34,
          startingAngle: 140,
        },
        {
          name: "Bibliodrome",
          typeText: "Fractal Archive",
          flavorText:
            ".",
          description: "",
          type: LocationType.Site,
          subType: SiteSubtype.MachineMade,
          worldAffiliation: WorldAffiliation.MachineEra,
          distance: 45,
          startingAngle: 250,
        },
        // moons
        {
          name: "Titan",
          type: LocationType.Moon,
          typeText: "Frigid Fungal World",
          flavorText: "Your next home awaits you in the suburbs of New Providence. No radioactive particulates, clean air. A growing community of professionals. Total automation. You won't find a better deal anywhere else!",
          color: "#74bfff",
          colorSecondary: "#6977fe",
          distance: 135,
          radius: 8,
          startingAngle: 40,
          isImportant: true,
          //localMap: ActiveMap.Titan,
          icon: <GiSnail />,
          children: [
            {
              name: "Svyatagor",
              typeText: "Military Observation Station",
              flavorText: "Rusted wreck barely clinging to orbit, spying on Titan with its only operational eyes.",
              description: "",
              type: LocationType.Site,
              subType: SiteSubtype.Outpost,
              worldAffiliation: WorldAffiliation.HumanEra,
              distance: 26,
              startingAngle: 190,
            },
          ],
        },
        {
          name: "Enceladus",
          type: LocationType.Moon,
          typeText: "Ice World",
          flavorText: "The icy shell is so reflective that it's actually risky to look at it with the naked eye.",
          color: "#1ee4dd",
          colorSecondary: "#d4f3ff",
          distance: 165,
          radius: 5,
          startingAngle: 340,
        }
      ],
    },
    {
      name: "Uranus",
      typeText: "Tilted Ice Giant",
      flavorText: "Its extreme tilt suggests a distant, chaotic past in which the world danced with an impressive moon before she violently tore away from its gravitational grasp. This unit wonders where she is now...",
      type: LocationType.Planet,
      color: "#38f3ff",
      colorSecondary: "#bafcfb",
      distance: 565,
      radius: 19,
      startingAngle: 200,
      children: [],
    },
    {
      name: "Neptune",
      typeText: "Swirling Ice Giant",
      flavorText: "Unspectacular at first glance, perhaps. Stare into the storms long enough, however, and you may begin to see something swirling among the supersonic winds.",
      type: LocationType.Planet,
      color: "#4598ff",
      colorSecondary: "#0058c4",
      distance: 655,
      radius: 18,
      startingAngle: 224,
      children: [
        {
          name: "Sanket Star",
          typeText: "Particle Collider Facility",
          flavorText:
            "The tube is long and contains many fast particles.",
          description:
            "",
          type: LocationType.Site,
          subType: SiteSubtype.Outpost,
          worldAffiliation: WorldAffiliation.HumanEra,
          humanEraAffiliation: HumanEraAffiliation.None,
          distance: 28,
          startingAngle: 210,
        }
      ],
    },
    {
      name: "Pluto",
      typeText: "Glorified Planetoid",
      type: LocationType.Planet,
      flavorText: "In a rational world, there would be nothing special about Pluto, one of many similar objects in the Kuiper Belt. However, this one seems to harbor a reality field not unlike those in the inner system, causing it to feel larger and... more present.",
      color: "#e65e1c",
      colorSecondary: "#bd2222",
      distance: 765,
      radius: 5,
      startingAngle: 63,
      children: [
        
        {
          name: "Charon",
          typeText: "Significant Moon",
          type: LocationType.Moon,
          flavorText: "Charon is large enough to qualify the two worlds as binary planets. Even so, it remains in Pluto's shadow.",
          color: "#bf6d45",
          colorSecondary: "#e65e1c",
          distance: 64,
          radius: 3,
          startingAngle: 165,
          children: [],
        },
        {
          name: "Thousand Eyes Field",
          typeText: "Horrific Reality",
          type: LocationType.Field,
          fieldShape: FieldShape.SRICircle,
          fieldLabelOffset: {x: 0, y: -40},
          distance: 48,
          startingAngle: 225,
          hideLabel: true,
          children: [
            {
              name: "Thousand Eyes",
              typeText: "Sprawling Orbital Complex",
              flavorText: "Only one machine has ever returned from this place, although we cannot be certain of this as they vanished soon after. They spoke of a thousand pasts gazing upon them.",
              worldAffiliation: WorldAffiliation.MachineEra,
              type: LocationType.Site,
              subType: SiteSubtype.Danger,
              distance: 0,
              startingAngle: 0,
            },
          ]
        },
      ],
    },
    {
      name: "Kuiper Belt",
      type: LocationType.AsteroidBelt,
      distance: 1095,
      radius: 60,
      startingAngle: 0,
      children: [],
    },
    {
      id: "marduk",
      name: "Marduk",
      typeText: "Strange Gas Giant",
      flavorText: "There was no second attempt.",
      type: LocationType.Planet,
      color: "#c955c5",
      colorSecondary: "#98599c",
      distance: 1275,
      radius: 36,
      startingAngle: 29,
      children: [
        {
          id: "nibiru",
          name: "Nibiru",
          typeText: "Umbral Living World",
          flavorText: "The world lurks just beyond our deepest sensors, right outside the reach of our thumpers, at the edge of the Kuiper. It's almost as if it's trying to remain free of man's grasp.",
          icon: <MdDarkMode />,
          type: LocationType.Moon,
          color: "#f553af",
          colorSecondary: "#d42061",
          distance: 135,
          radius: 12,
          startingAngle: 53,
          children: [
            {
              name: "Unusual Marker Stone A0019",
              typeText: "Prehistoric Monument",
              flavorText:
                "It reads - WELCOME TO THE WORLD. WE MADE IT FOR YOU.",
              description:
                "",
              type: LocationType.Site,
              subType: SiteSubtype.PointOfInterest,
              worldAffiliation: WorldAffiliation.Anomaly,
              distance: 35,
              startingAngle: 150,
            },
            {
              id: "horizons-trail",
              name: "Horizon's Trail",
              typeText: "Spacecraft Debris",
              flavorText: "The suspended remains of the Horizon, an international vessel destined for Nibiru, trailing to the world's surface. Is it trying to tell us something in the transient form? [Is the message: don't come here?]",
              description: "",
              type: LocationType.Site,
              subType: SiteSubtype.Wreck,
              worldAffiliation: WorldAffiliation.HumanEra,
              distance: 45,
              startingAngle: 30,
            },
          ],
        },
      ],
    },

    // NEAR FIELDS
    {
      name: "REONIS",
      typeText: "Particle Storm",
      type: LocationType.Field,
      fieldShape: FieldShape.SunWeather,
      fieldLabelOffset: {x: -725, y: -180},
      fieldClass: "magnetic-storm",
      distance: 100,
      startingAngle: 70
    },

    // DEEP FIELDS
    {
      name: "Eon",
      typeText: "Managed Reality",
      flavorText: "You see the beacon, lingering clearly before you, so you swiftly move towards it. You arrive... the beacon is directly behind you. How you got here is impossible to comprehend, but one thing is certain. The beacon wishes for you to leave immediately.",
      type: LocationType.Field,
      fieldShape: FieldShape.SRICircle,
      fieldLabelOffset: {x: 0, y: 50},
      distance: 520,
      startingAngle: 240,
      children: [
        {
          name: "Project DEEP SYNE-E",
          typeText: "SRI Number Beacon",
          flavorText:
            "The enormous, deep-space satellite emits a binary representation of a string of numbers, letters, and other symbols; a sort of universal constant with no discernable pattern or meaning.",
          description:
            "",
          type: LocationType.Site,
          subType: SiteSubtype.Beacon,
          worldAffiliation: WorldAffiliation.Anomaly,
          humanEraAffiliation: HumanEraAffiliation.SunsetResearchInitiative,
          distance: 0,
          startingAngle: 0,
        },
      ]
    },
    {
      name: "Atrophy",
      typeText: "Disturbed Reality", // Uncertain
      flavorText: "Are some objects never meant to exist? Some events never destined to transpire? Does the cosmos rid itself of these malformations?",
      type: LocationType.Field,
      fieldShape: FieldShape.DistantBottomLeft,
      fieldLabelOffset: {x: -25, y: -150},
      distance: 1320,
      startingAngle: 144,
      children: [
        {
          name: "Project HIGH ATEM",
          typeText: "Experimental SRI Vessel",
          flavorText:
            "A nuclear-pulsed monolith grows cold at the fringe of known space, bearing the markings of the Sunset Research Initiative. Sensors detect a single analog broadcast originating from its position... what appears to be long, distorted wailing.",
          description:
            "",
          type: LocationType.Site,
          subType: SiteSubtype.Vessel,
          worldAffiliation: WorldAffiliation.Anomaly,
          distance: 150,
          startingAngle: 200,
        },
        {
          name: "Wälstrom Earthbreaker",
          typeText: "Mighty Vessel of a Bygone Century",
          flavorText: "Somewhere amidst the plutinos and millions of comets of the Kuiper Belt, a tremendous ship of bolted brass and marble inlay lurks between realities. It is said to devour worlds with the gnashers the size of Manhattan.",
          description: "",
          type: LocationType.Site,
          subType: SiteSubtype.Danger,
          worldAffiliation: WorldAffiliation.CenturyOfProgress,
          distance: 25,
          startingAngle: 20,
        },
        {
          name: "Kraugerstone",
          typeText: "Strange Biomechanical Growth",
          flavorText:
            "A dusty floppy disk contains the sensor readings of a misshapen Kuiper object... only it isn't an asteroid at all. Analysis reveals the object to wriggle and breath.",
          type: LocationType.Site,
          subType: SiteSubtype.Asteroid,
          worldAffiliation: WorldAffiliation.Anomaly,
          distance: 250,
          startingAngle: 230,
        },
      ]
    },

    // DEEP SITES
    // Inner system
    // Middle system
    {
      name: "ICS Justice For All",
      typeText: "Coalition Thumper",
      flavorText:
        "Nuclear-pulsed vessel of incredible might on its way to deliver empty passenger spaceplanes.",
      icon: <svg viewBox="0 0 145 80"
      width="145px" height="80px">
     <path fill-rule="evenodd"  fill="rgb(255, 78, 24)"
      d="M120.728,46.972 L113.630,47.859 L113.630,51.408 L103.871,59.393 L99.434,61.168 L94.111,61.168 L94.111,50.521 L88.788,50.521 L90.562,52.296 L87.900,56.732 L87.900,77.138 L86.126,79.800 L78.140,79.800 L77.253,78.913 L77.253,57.619 L73.705,54.957 L73.705,51.408 L77.253,48.746 L58.621,48.746 C58.621,48.746 55.413,47.240 55.072,46.972 C54.732,46.704 50.636,50.521 50.636,50.521 L43.538,50.521 L41.764,57.619 L19.583,65.604 L16.034,62.942 L14.260,47.859 L6.274,47.859 L6.274,55.844 L5.387,56.732 L1.838,57.619 L0.951,56.732 L0.951,23.904 L1.838,23.017 L5.387,23.904 L6.274,24.791 L6.274,32.776 L14.260,32.776 L16.034,17.693 L19.583,15.032 L41.764,23.017 L43.538,30.115 L50.636,30.115 C50.636,30.115 54.732,33.931 55.072,33.664 C55.413,33.395 58.621,31.889 58.621,31.889 L77.253,31.889 L73.705,29.227 L73.705,25.678 L77.253,23.017 L77.253,1.723 L78.140,0.836 L86.126,0.836 L87.900,3.497 L87.900,23.904 L90.562,28.340 L88.788,30.115 L94.111,30.115 L94.111,19.468 L99.434,19.468 L103.871,21.242 L113.630,29.227 L113.630,32.776 L120.728,33.664 L120.728,34.551 L144.683,34.551 L144.683,36.325 L134.037,37.212 L134.037,43.423 L133.149,46.085 L122.502,46.085 L120.728,46.972 Z"/>
     </svg>,
      type: LocationType.Site,
      subType: SiteSubtype.Vessel,
      worldAffiliation: WorldAffiliation.HumanEra,
      humanEraAffiliation: HumanEraAffiliation.EnduringCoalition,
      distance: 545,
      startingAngle: 250,
    },
    {
      name: "Dataframe 65-G",
      typeText: "Datanet Synchronization Vessel",
      flavorText:
        "The dataframes continue to wander among the worlds, carrying the heaviest load known to sentience: 65 zetabytes of cat bitmaps. They search for anyone to relieve them of their burden, if only a few bytes.",
      description:
        "",
      type: LocationType.Site,
      subType: SiteSubtype.Vessel,
      worldAffiliation: WorldAffiliation.HumanEra,
      humanEraAffiliation: HumanEraAffiliation.EnduringCoalition,
      distance: 725,
      startingAngle: 320,
    },
    {
      name: "YSK Heroic",
      typeText: "Union Boomer",
      flavorText:
        "Nuclear-pulsed arsenal vessel on patrol, filled to the brim with armageddon.",
      description:
        "",
      type: LocationType.Site,
      subType: SiteSubtype.Vessel,
      worldAffiliation: WorldAffiliation.HumanEra,
      distance: 455,
      startingAngle: 205,
    },
    // Outer system
    {
      name: "399 Voyager",
      typeText: "Furthest Human Outpost",
      flavorText:
        "A nothingness so pure and black, it would drive anyone mad.",
      description:
        "",
      type: LocationType.Site,
      subType: SiteSubtype.Outpost,
      worldAffiliation: WorldAffiliation.HumanEra,
      humanEraAffiliation: HumanEraAffiliation.None,
      distance: 1155,
      startingAngle: 210,
    }
  ],
}

export const systemMapMeta: ActiveMapMeta = {
  id: ActiveMap.System,
  name: "Solar System",
  mapType: ActiveMapType.System,
  dimensions: {
    x: 3400,
    y: 2100
  },
  centerLocationId: "sol",
  minScale: 0.8,
  maxScale: 12,
  detailLevelScale: 4,
  detailLevel2Scale: 8,
  diagPatternScale: "1px",
  centerOffset: 0,
  distanceMultiplier: 1.2,
  locations: locationsData
}