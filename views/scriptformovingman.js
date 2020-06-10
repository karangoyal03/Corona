window.onload = function () {
  /* a Pen by Diaco m.lotfollahi  : https://diacodesign.com */
  var Doc = document,
    TwL = TweenLite,
    E0 = Sine.easeInOut,
    E1 = Sine.easeIn,
    E2 = Sine.easeOut;
  (B = Doc.getElementById("B")),
    (UB = Doc.getElementById("UB")),
    (F = Doc.getElementById("FF")),
    (H = Doc.getElementById("HF"));
  TwL.set("svg", { opacity: 1 });
  TwL.set(B, { y: 10 });
  TwL.set(UB, {
    fill: "#151515",
    transformOrigin: "50% 100%",
  });
  TwL.set(H, {
    transformOrigin: "-5px 0px",
    rotation: -10,
    fill: "#454545",
    y: -1,
  });
  TwL.set(F, {
    transformOrigin: "55% 10px",
    rotation: -37,
    fill: "#DC0026",
  });
  TwL.set("#H", {
    transformOrigin: "5px 50px",
    fill: "#454545",
    scale: 0.967,
    rotation: -5,
  });
  TwL.set(".H1", {
    rotation: -20,
    transformOrigin: "0px 5px",
    y: -5,
  });
  TwL.set(".H2", {
    transformOrigin: "10% 0%",
    rotation: -10,
    y: -1.5,
    scaleY: 1.03,
  });
  TwL.set(".F1", { transformOrigin: "21px 2px" });
  TwL.set(".F2", { transformOrigin: "25px 0px" });
  TwL.set(".F3", { transformOrigin: "4.2px 4.2px" });
  var F2 = F.cloneNode(true),
    H2 = H.cloneNode(true);
  F2.id = "FB";
  H2.id = "HB";
  B.insertBefore(F2, UB);
  B.insertBefore(H2, F2);
  TwL.set(".FB", { fill: "#DC0026" });
  TwL.set("#FB", { fill: "#A50018" });
  TwL.set("#HB", { y: -3, fill: "#333" });
  function M(p1, p2) {
    var tl = new TimelineMax({ repeat: -1 })
      .add("l1", 0)
      .add("l2", 0.25)
      .add("l3", 0.5)
      .add("l4", 0.75)
      .add("l5", 1)
      .to(p1, 0.5, { rotation: 27, ease: E0 }, "l1")
      .to(p1, 0.25, { rotation: -37, ease: E1 }, "l3")
      .to(p1 + " .F1", 0.25, { rotation: 15, ease: E0 }, "l2")
      .to(p1 + " .F1", 0.25, { rotation: 80, ease: E1 }, "l3")
      .to(p1 + " .F1", 0.25, { rotation: 0, ease: E2 }, "l4")
      .to(p1 + " .F2", 0.25, { rotation: 45, repeat: 1, yoyo: true }, "l3")
      .to(
        p1 + " .F3",
        0.25,
        {
          rotation: -35,
          repeat: 1,
          yoyo: true,
          scaleX: 0.925,
        },
        "l2"
      )
      .to(
        p2,
        0.5,
        {
          rotation: 25,
          ease: E0,
          yoyo: true,
          repeat: 1,
        },
        "l1"
      )
      .to(
        p2 + " .H1",
        0.5,
        {
          rotation: 15,
          ease: E0,
          yoyo: true,
          repeat: 1,
        },
        "l1"
      )
      .to(
        p2 + " .H2",
        0.5,
        {
          rotation: 0,
          ease: E0,
          yoyo: true,
          repeat: 1,
        },
        "l1"
      );
    return tl;
  }
  var MTl = new TimelineLite()
    .add(M("#FF", "#HB"))
    .add(M("#FB", "#HF"), 0.5)
    .to(
      B,
      0.25,
      {
        y: "+=" + -20,
        repeat: -1,
        yoyo: true,
        ease: E0,
      },
      0
    )
    .to("#H", 0.25, { rotation: 1, repeat: -1, yoyo: true, ease: E0 }, 0)
    .to(
      "#mSH",
      0.25,
      {
        scaleX: 0.6,
        repeat: -1,
        yoyo: true,
        ease: E1,
        transformOrigin: "center",
      },
      0
    )
    .time(0.5);
  /* a Pen by Diaco m.lotfollahi : https://diacodesign.com */

  let firstbtn = document.getElementById("year1btn");
  let secondbtn = document.getElementById("year2btn");
  let thirdbtn = document.getElementById("year3btn");
  var year1link = document.getElementById("year1link");
  var year2link = document.getElementById("year2link");
  var yaer3link = document.getElementById("year3link");

  firstbtn.onclick = function () {
    var style = year1link.style.display;
    if (style == "none") {
      year1link.style.display = "block";
    } else {
      year1link.style.display = "none";
    }
  };
  secondbtn.onclick = function () {
    var style = year2link.style.display;
    if (style == "block") {
      year2link.style.display = "none";
    } else {
      year2link.style.display = "block";
    }
  };
  thirdbtn.onclick = function () {
    var style = year3link.style.display;
    if (style == "block") {
      year3link.style.display = "none";
    } else {
      year3link.style.display = "block";
    }
  };
};
