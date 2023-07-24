import classes from "../styles/Dashboardd.module.scss";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { Chart } from "react-google-charts";

export const data = [
  ["Year", "Sales", "Expenses"],
  ["2004", 1000, 400],
  ["2005", 1170, 460],
  ["2006", 660, 1120],
  ["2007", 1030, 540],
];

export const options = {
  curveType: "function",
  legend: { position: "bottom" },
};


const ActivityReport = (props) => {
  const dialer = {
    width: 300,
    height: 300,
    left: 0,
    top: 47,
    position: "absolute",
  };

  return (
    <div className={classes.rootMain}>
      <div className={classes.left}>
        <div
          style={{
            width: 1107,
            height: 154,
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "flex-start",
            gap: 36,
            display: "inline-flex",
          }}
        >
          <div style={{ width: 1099, height: 70, position: "relative" }}>
            <div
              style={{
                width: 151,
                height: 39,
                paddingLeft: 24,
                paddingRight: 24,
                paddingTop: 8,
                paddingBottom: 8,
                left: 948,
                top: 16,
                position: "absolute",
                background: "white",
                borderRadius: 16,
                border: "0.50px #6C9FFF solid",
                justifyContent: "center",
                alignItems: "center",
                gap: 8,
                display: "inline-flex",
              }}
            >
              <div
                style={{
                  textAlign: "center",
                  color: "#7282FB",
                  fontSize: 18,
                  fontFamily: "Raleway",
                  fontWeight: "600",
                  textTransform: "capitalize",
                  wordWrap: "break-word",
                }}
              >
                Edit Profile
              </div>
            </div>
            <div
              style={{
                width: 125,
                height: 40,
                paddingLeft: 24,
                paddingRight: 24,
                paddingTop: 8,
                paddingBottom: 8,
                left: 799,
                top: 15,
                position: "absolute",
                background: "#6C9FFF",
                borderRadius: 8,
                border: "0.50px #6C9FFF solid",
                justifyContent: "center",
                alignItems: "center",
                gap: 8,
                display: "inline-flex",
              }}
            >
              <div style={{ width: 24, height: 24, position: "relative" }}>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="2">
                    <path
                      id="Vector"
                      d="M20.7273 0H3.27273C2.40475 0 1.57232 0.361265 0.95856 1.00432C0.344804 1.64738 0 2.51955 0 3.42896V14.8588C0 15.7683 0.344804 16.6404 0.95856 17.2835C1.57232 17.9265 2.40475 18.2878 3.27273 18.2878H4.36364V22.8598C4.36412 23.073 4.42154 23.2819 4.5294 23.4627C4.63726 23.6436 4.79126 23.7892 4.97399 23.8831C5.15671 23.9771 5.36088 24.0156 5.5634 23.9943C5.76592 23.973 5.95872 23.8928 6.12 23.7627L12.84 18.2878H20.7273C21.5953 18.2878 22.4277 17.9265 23.0414 17.2835C23.6552 16.6404 24 15.7683 24 14.8588V3.42896C24 2.51955 23.6552 1.64738 23.0414 1.00432C22.4277 0.361265 21.5953 0 20.7273 0ZM21.8182 14.8588C21.8182 15.162 21.7032 15.4527 21.4987 15.6671C21.2941 15.8814 21.0166 16.0018 20.7273 16.0018H12.4691C12.2281 16.0026 11.9941 16.087 11.8036 16.2419L6.54545 20.5738V17.1448C6.54545 16.8417 6.43052 16.551 6.22593 16.3366C6.02135 16.1222 5.74387 16.0018 5.45455 16.0018H3.27273C2.9834 16.0018 2.70592 15.8814 2.50134 15.6671C2.29675 15.4527 2.18182 15.162 2.18182 14.8588V3.42896C2.18182 3.12582 2.29675 2.8351 2.50134 2.62075C2.70592 2.4064 2.9834 2.28598 3.27273 2.28598H20.7273C21.0166 2.28598 21.2941 2.4064 21.4987 2.62075C21.7032 2.8351 21.8182 3.12582 21.8182 3.42896V14.8588Z"
                      fill="white"
                    />
                    <path
                      id="Vector_2"
                      d="M6.5455 8.00082H13.091C13.3803 8.00082 13.6578 7.8804 13.8623 7.66605C14.0669 7.45169 14.1819 7.16097 14.1819 6.85783C14.1819 6.55469 14.0669 6.26397 13.8623 6.04962C13.6578 5.83527 13.3803 5.71484 13.091 5.71484H6.5455C6.25617 5.71484 5.9787 5.83527 5.77411 6.04962C5.56952 6.26397 5.45459 6.55469 5.45459 6.85783C5.45459 7.16097 5.56952 7.45169 5.77411 7.66605C5.9787 7.8804 6.25617 8.00082 6.5455 8.00082ZM17.4546 10.2868H6.5455C6.25617 10.2868 5.9787 10.4072 5.77411 10.6216C5.56952 10.8359 5.45459 11.1266 5.45459 11.4298C5.45459 11.7329 5.56952 12.0236 5.77411 12.238C5.9787 12.4523 6.25617 12.5728 6.5455 12.5728H17.4546C17.7439 12.5728 18.0214 12.4523 18.226 12.238C18.4306 12.0236 18.5455 11.7329 18.5455 11.4298C18.5455 11.1266 18.4306 10.8359 18.226 10.6216C18.0214 10.4072 17.7439 10.2868 17.4546 10.2868Z"
                      fill="white"
                    />
                  </g>
                </svg>
              </div>
              <div
                style={{
                  textAlign: "center",
                  color: "white",
                  fontSize: 20,
                  fontFamily: "Raleway",
                  fontWeight: "600",
                  textTransform: "capitalize",
                  wordWrap: "break-word",
                }}
              >
                Chat
              </div>
            </div>
            <div
              style={{
                width: 228,
                height: 70,
                left: 0,
                top: 0,
                position: "absolute",
              }}
            >
              <div
                style={{
                  width: 70,
                  height: 70,
                  left: 0,
                  top: 0,
                  position: "absolute",
                }}
              >
                <img
                  style={{
                    width: 69.34,
                    height: 66,
                    left: 0,
                    top: 0,
                    position: "absolute",
                    borderRadius: 140,
                    border: "0.50px #4D98ED solid",
                  }}
                  src="https://via.placeholder.com/69x66"
                />
                <img
                  style={{
                    width: 70,
                    height: 70,
                    left: 0,
                    top: 0,
                    position: "absolute",
                    borderRadius: 140,
                    border: "0.50px #4D98ED solid",
                  }}
                  src="./fiona-profile-image-1 3.png"
                />
              </div>
              <div
                style={{
                  left: 94,
                  top: 12,
                  position: "absolute",
                  textAlign: "center",
                  color: "#0D1DAC",
                  fontSize: 40,
                  fontFamily: "Raleway",
                  fontWeight: "600",
                  wordWrap: "break-word",
                }}
              >
                Ronald
              </div>
            </div>
          </div>
          <div style={{ width: 1107, height: 48, position: "relative" }}>
            <div
              style={{
                width: 1107,
                height: 48,
                left: 0,
                top: 0,
                position: "absolute",
                justifyContent: "center",
                alignItems: "center",
                gap: 816,
                display: "inline-flex",
              }}
            >
              <div
                style={{
                  color: "black",
                  fontSize: 23,
                  fontFamily: "Raleway",
                  fontWeight: "600",
                  wordWrap: "break-word",
                }}
              >
                Activity Report
              </div>
              <div
                style={{
                  paddingLeft: 24,
                  paddingRight: 24,
                  paddingTop: 12,
                  paddingBottom: 12,
                  background: "#6C9FFF",
                  boxShadow: "0px 4px 8px rgba(108, 159, 255, 0.25)",
                  borderRadius: 30,
                  justifyContent: "center",
                  alignItems: "center",
                  gap: 8,
                  display: "flex",
                }}
              >
                <div
                  style={{
                    color: "white",
                    fontSize: 16,
                    fontFamily: "Raleway",
                    fontWeight: "600",
                    wordWrap: "break-word",
                  }}
                >
                  Today
                </div>
                <div
                  style={{
                    width: 24,
                    height: 24,
                    position: "relative",
                    background: "rgba(255, 255, 255, 0.10)",
                    borderRadius: 16,
                  }}
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g id="calendar">
                      <rect
                        width="24"
                        height="24"
                        rx="12"
                        fill="white"
                        fill-opacity="0.1"
                      />
                      <g id="Calendar">
                        <path
                          id="Vector"
                          d="M14.4331 5.33335C14.7161 5.33268 14.9399 5.55257 14.9406 5.84576L14.9413 6.34551C16.7777 6.48943 17.9908 7.74081 17.9928 9.65985L18 15.277C18.0026 17.3693 16.6882 18.6567 14.5812 18.66L9.43459 18.6667C7.3408 18.6693 6.00988 17.3513 6.00725 15.253L6 9.70183C5.99738 7.77013 7.16769 6.52208 9.00412 6.3535L9.00346 5.85375C9.0028 5.56057 9.22001 5.34001 9.50963 5.34001C9.79925 5.33934 10.0165 5.55923 10.0171 5.85242L10.0178 6.31885L13.9276 6.31352L13.9269 5.84709C13.9263 5.5539 14.1435 5.33401 14.4331 5.33335ZM14.7017 14.7946H14.6951C14.3923 14.8019 14.1494 15.0558 14.156 15.3623C14.1567 15.6688 14.4009 15.9214 14.7036 15.928C15.0123 15.9274 15.2625 15.6735 15.2618 15.3603C15.2618 15.0471 15.011 14.7946 14.7017 14.7946ZM9.27794 14.7953C8.97516 14.8086 8.7382 15.0625 8.73886 15.369C8.75268 15.6755 9.0028 15.9154 9.30558 15.9014C9.60244 15.8881 9.83874 15.6342 9.82492 15.3277C9.81834 15.0278 9.57414 14.7946 9.27794 14.7953ZM11.9898 14.7919C11.687 14.8059 11.4507 15.0591 11.4507 15.3657C11.4645 15.6722 11.7147 15.9114 12.0174 15.8981C12.3136 15.8841 12.5506 15.6309 12.5368 15.3237C12.5302 15.0245 12.286 14.7913 11.9898 14.7919ZM9.27465 12.3965C8.97187 12.4098 8.73557 12.6637 8.73622 12.9702C8.74939 13.2767 9.00017 13.5166 9.30295 13.5026C9.59915 13.4893 9.83545 13.2354 9.82163 12.9289C9.81504 12.629 9.5715 12.3958 9.27465 12.3965ZM11.9872 12.3732C11.6844 12.3865 11.4474 12.6404 11.4481 12.9469C11.4612 13.2534 11.712 13.4926 12.0148 13.4793C12.311 13.4653 12.5473 13.2121 12.5341 12.9056C12.5269 12.6057 12.2834 12.3725 11.9872 12.3732ZM14.699 12.3765C14.3962 12.3831 14.1593 12.6297 14.1599 12.9362V12.9435C14.1665 13.25 14.4167 13.4826 14.7201 13.4759C15.0163 13.4686 15.2526 13.2147 15.246 12.9082C15.2322 12.615 14.9946 12.3758 14.699 12.3765ZM13.9289 7.33967L10.0191 7.34501L10.0198 7.88407C10.0198 8.17126 9.8032 8.39781 9.51358 8.39781C9.22396 8.39848 9.00609 8.17259 9.00609 7.8854L9.00543 7.37233C7.72191 7.50093 7.01169 8.25522 7.01366 9.70049L7.01432 9.90772L16.9798 9.8944V9.66118C16.9514 8.22856 16.2327 7.47694 14.9426 7.365L14.9432 7.87807C14.9432 8.1646 14.7201 8.39181 14.4371 8.39181C14.1474 8.39248 13.9296 8.16593 13.9296 7.8794L13.9289 7.33967Z"
                          fill="white"
                        />
                      </g>
                    </g>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          style={{
            width: 1066,
            height: 156,
            justifyContent: "center",
            alignItems: "center",
            gap: 42,
            display: "inline-flex",
          }}
        >
          <div style={{ width: 300, position: "relative" }}>
            <div
              style={{
                width: 300,
                height: 300,
                left: 0,
                top: 47,
                position: "absolute",
              }}
            >
              <CircularProgressbar style={dialer} value="68" text="68 BPM" />;
              <div
                style={{
                  width: 235,
                  height: 235,
                  left: 33,
                  top: 33,
                  position: "absolute",
                }}
              >
                <div
                  style={{
                    width: 235,
                    height: 235,
                    left: 0,
                    top: 0,
                    position: "absolute",
                  }}
                >
                  <div
                    style={{
                      width: 235,
                      height: 235,
                      left: 0,
                      top: 0,
                      position: "absolute",
                      borderRadius: 9999,
                      border: "6.83px #F2F5FC solid",
                    }}
                  />
                  <div
                    style={{
                      width: 235,
                      height: 235,
                      left: 0,
                      top: 0,
                      position: "absolute",
                      background: "#82ADFF",
                      borderRadius: 9999,
                    }}
                  />
                </div>
                <div
                  style={{
                    width: 67,
                    height: 94.31,
                    left: 84.36,
                    top: 70.27,
                    position: "absolute",
                  }}
                >
                  <div
                    style={{
                      left: 0,
                      top: 0,
                      position: "absolute",
                      color: "white",
                      fontSize: 53.54,
                      fontFamily: "Raleway",
                      fontWeight: "600",
                      letterSpacing: 0.74,
                      wordWrap: "break-word",
                    }}
                  >
                    68{" "}
                  </div>
                  <div
                    style={{
                      left: 6.03,
                      top: 64.31,
                      position: "absolute",
                      color: "white",
                      fontSize: 25.54,
                      fontFamily: "Raleway",
                      fontWeight: "600",
                      letterSpacing: 0.3,
                      wordWrap: "break-word",
                    }}
                  >
                    bpm
                  </div>
                </div>
              </div>
            </div>
            <div
              style={{
                left: 0,
                top: 0,
                position: "absolute",
                color: "black",
                fontSize: 20,
                fontFamily: "Raleway",
                fontWeight: "600",
                wordWrap: "break-word",
              }}
            >
              Heartbeat
            </div>
          </div>
          <div style={{ width: 300, position: "relative" }}>
            <div
              style={{
                width: 300,
                height: 300,
                left: 0,
                top: 47,
                position: "absolute",
              }}
            >
              <CircularProgressbar style={dialer} value="54" text="54 BPM" />;
              <div
                style={{
                  width: 235,
                  height: 235,
                  left: 33,
                  top: 33,
                  position: "absolute",
                }}
              >
                <div
                  style={{
                    width: 235,
                    height: 235,
                    left: 0,
                    top: 0,
                    position: "absolute",
                  }}
                >
                  <div
                    style={{
                      width: 235,
                      height: 235,
                      left: 0,
                      top: 0,
                      position: "absolute",
                      borderRadius: 9999,
                      border: "6.83px #F2F5FC solid",
                    }}
                  />
                  <div
                    style={{
                      width: 235,
                      height: 235,
                      left: 0,
                      top: 0,
                      position: "absolute",
                      background: "#6C9FFF",
                      borderRadius: 9999,
                    }}
                  />
                </div>
                <div
                  style={{
                    width: 63,
                    height: 95,
                    left: 84,
                    top: 70.27,
                    position: "absolute",
                  }}
                >
                  <div
                    style={{
                      left: 0,
                      top: 0,
                      position: "absolute",
                      color: "white",
                      fontSize: 53.54,
                      fontFamily: "Raleway",
                      fontWeight: "600",
                      letterSpacing: 0.74,
                      wordWrap: "break-word",
                    }}
                  >
                    54
                  </div>
                  <div
                    style={{
                      left: 15,
                      top: 65,
                      position: "absolute",
                      color: "white",
                      fontSize: 25.54,
                      fontFamily: "Raleway",
                      fontWeight: "600",
                      letterSpacing: 0.3,
                      wordWrap: "break-word",
                    }}
                  >
                    Kg
                  </div>
                </div>
              </div>
            </div>
            <div
              style={{
                left: 0,
                top: 0,
                position: "absolute",
                color: "black",
                fontSize: 20,
                fontFamily: "Raleway",
                fontWeight: "600",
                wordWrap: "break-word",
              }}
            >
              Weight
            </div>
          </div>
          <div style={{ width: 300, position: "relative" }}>
            <div
              style={{
                width: 300,
                height: 300,
                left: 0,
                top: 47,
                position: "absolute",
              }}
            >
              <CircularProgressbar style={dialer} value="54" text="54 BPM" />;
              <div
                style={{
                  width: 235,
                  height: 235,
                  left: 33,
                  top: 33,
                  position: "absolute",
                }}
              >
                <div
                  style={{
                    width: 235,
                    height: 235,
                    left: 0,
                    top: 0,
                    position: "absolute",
                  }}
                >
                  <div
                    style={{
                      width: 235,
                      height: 235,
                      left: 0,
                      top: 0,
                      position: "absolute",
                      borderRadius: 9999,
                      border: "6.83px #F2F5FC solid",
                    }}
                  />
                  <div
                    style={{
                      width: 235,
                      height: 235,
                      left: 0,
                      top: 0,
                      position: "absolute",
                      background: "#6C9FFF",
                      borderRadius: 9999,
                    }}
                  />
                </div>
                <div
                  style={{
                    width: 106,
                    height: 95,
                    left: 65,
                    top: 70.27,
                    position: "absolute",
                  }}
                >
                  <div
                    style={{
                      left: 21,
                      top: 0,
                      position: "absolute",
                      color: "white",
                      fontSize: 53.54,
                      fontFamily: "Raleway",
                      fontWeight: "600",
                      letterSpacing: 0.74,
                      wordWrap: "break-word",
                    }}
                  >
                    54
                  </div>
                  <div
                    style={{
                      left: 0,
                      top: 65,
                      position: "absolute",
                      color: "white",
                      fontSize: 25.54,
                      fontFamily: "Raleway",
                      fontWeight: "600",
                      letterSpacing: 0.3,
                      wordWrap: "break-word",
                    }}
                  >
                    Superior
                  </div>
                </div>
              </div>
            </div>
            <div
              style={{
                left: 0,
                top: 0,
                position: "absolute",
                color: "black",
                fontSize: 20,
                fontFamily: "Raleway",
                fontWeight: "600",
                wordWrap: "break-word",
              }}
            >
              VO2
            </div>
          </div>
          <div
            style={{
              width: 40,
              height: 40,
              position: "relative",
              transformOrigin: "0 0",
            }}
          >
            <div
              style={{
                width: 40,
                height: 40,
                left: 0,
                top: 0,
                position: "absolute",
                transformOrigin: "0 0",
                background: "#FCFAFF",
                borderRadius: 50,
              }}
            />
            <div
              style={{
                width: 40,
                height: 40,
                left: 0,
                top: 0,
                position: "absolute",
              }}
            >
              <img
                style={{
                  width: 30,
                  height: 30,
                  left: 5,
                  top: 8,
                  bottom: 7,
                  position: "absolute",
                }}
                src="./blue-arrow.png"
              />
            </div>
          </div>
        </div>
      </div>

      <div
        style={{
          top: "652px",
          right: "1102px",
          width: 630,
          height: 370,
          position: "relative",
        }}
      >
        <div
          style={{
            left: 0,
            top: 0,
            position: "absolute",
            color: "black",
            fontSize: 32,
            fontFamily: "Raleway",
            fontWeight: "600",
            wordWrap: "break-word",
          }}
        >
          Exercise Graph
        </div>
        <div
          style={{
            width: 630,
            height: 296,
            paddingTop: 39,
            paddingBottom: 38.56,
            paddingLeft: 76.43,
            paddingRight: 76.78,
            left: 0,
            top: 74,
            position: "absolute",
            background: "",
            boxShadow: "0px 4px 8px rgba(59, 95, 198, 0.25)",
            borderRadius: 56,
            overflow: "hidden",
            justifyContent: "center",
            alignItems: "center",
            display: "inline-flex",
          }}
        >
          

          <Chart
      chartType="LineChart"
      width="100%"
      height="400px"
      data={data}
      options={options}
      style={{background:"linear-gradient(123deg, #7FA5ED 0%, #0D30AC 100%)"}}
    />
        </div>





        <div style={{paddingBottom:"20px", top:"150px",left:"917px",width: 236, height: 220, position: 'relative'}}>
  <div style={{width: 236, height: 60, paddingLeft: 24, paddingRight: 24, paddingTop: 16, paddingBottom: 16, left: 0, top: 160, position: 'absolute', background: '#6C9FFF', borderRadius: 80, justifyContent: 'center', alignItems: 'center', gap: 8, display: 'inline-flex'}}>
    <div style={{color: 'white', fontSize: 24, fontFamily: 'Raleway', fontWeight: '600', textTransform: 'capitalize', wordWrap: 'break-word'}}>Assign Exercises</div>
  </div>
  <div style={{width: 229, height: 60, paddingLeft: 24, paddingRight: 24, paddingTop: 16, paddingBottom: 16, left: 0, top: 80, position: 'absolute', background: '#6C9FFF', borderRadius: 80, justifyContent: 'center', alignItems: 'center', gap: 8, display: 'inline-flex'}}>
    <div style={{color: 'white', fontSize: 24, fontFamily: 'Raleway', fontWeight: '600', textTransform: 'capitalize', wordWrap: 'break-word'}}>Assign Nutrition</div>
  </div>
  <div style={{width: 172, height: 60, paddingLeft: 24, paddingRight: 24, paddingTop: 16, paddingBottom: 16, left: 57, top: 0, position: 'absolute', background: '#6C9FFF', borderRadius: 80, justifyContent: 'center', alignItems: 'center', gap: 8, display: 'inline-flex'}}>
    <div style={{color: 'white', fontSize: 24, fontFamily: 'Raleway', fontWeight: '600', textTransform: 'capitalize', wordWrap: 'break-word'}}>Daily Chart</div>
  </div>
</div>
      </div>
      <br></br>
      <br></br>
      <br></br>
    </div>
    
  );
};

export default ActivityReport;
