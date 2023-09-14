"use client";
import "./style.css";
import {
  Card,
  CardTitle,
  CardBody,
  Grid,
  GridItem,
  Split,
  SplitItem,
} from "@patternfly/react-core";
import React, { useState, useEffect } from "react";

function Count() {
  const [data, setData] = useState({});

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          "https://spaship.dev.redhat.com/api/v1/analytics/deployment/time-saved?averageDeploymentTimeInSecs=1800"
        );
        const result = await response.json();
        console.log("full data: ", result);
        console.log("resultdata", result.data);
        console.log("deployment count", result.data.deploymentCount);
        setData(result.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, []);

  return (
    <>
      <Grid style={{ margin: "0% 11% 11% 11%" }}>
        <GridItem span={4} style={{ margin: " 0px 30px" }}>
          <Card className="pf-u-p-lg">
            <Split>
              <SplitItem>
                <img
                  src="/img/rocket-launch.gif"
                  style={{
                    margin: "10% 0% 0% 30%",
                    width: "100px",
                    height: "100px",
                  }}
                />
              </SplitItem>
              <SplitItem className="stat-card-center">
                <p
                  style={{
                    fontSize: "80px",
                    fontWeight: "600",
                    color: "#1652d4",
                    display: "flex",
                  }}
                >
                  {data?.deploymentCount}
                </p>
              </SplitItem>
            </Split>

            <h4
              className="stat-card-center pf-u-p-lg"
              style={{
                color: "#000",
                fontWeight: "700",
                fontSize: "30px",
              }}
            >
              Deployment count
            </h4>
            {/* </div> */}
          </Card>
        </GridItem>
        <GridItem span={4} style={{ margin: " 0px 30px" }}>
          <Card className="pf-u-p-lg">
            <Split>
              <SplitItem>
                <img
                  src="/img/down-time.gif"
                  style={{
                    margin: "10% 0% 0% 30%",
                    width: "100px",
                    height: "100px",
                  }}
                />
              </SplitItem>
              <SplitItem className="stat-card-center">
                <p
                  style={{
                    fontSize: "80px",
                    fontWeight: "600",
                    color: "#FDCB50",
                    display: "flex",
                  }}
                >
                  {data?.timeSavedInHours}
                </p>
              </SplitItem>
            </Split>

            <h4
              className="stat-card-center pf-u-p-lg"
              style={{
                color: "#000",
                fontWeight: "700",
                fontSize: "30px",
              }}
            >
              Time saved in hours
            </h4>
            {/* </div> */}
          </Card>
        </GridItem>
        <GridItem span={4} style={{ margin: " 0px 30px" }}>
          <Card className="pf-u-p-lg">
            <Split>
              <SplitItem>
                <img
                  src="/img/edc.gif"
                  style={{
                    margin: "10% 0% 0% 30%",
                    width: "100px",
                    height: "100px",
                  }}
                />
              </SplitItem>
              <SplitItem className="stat-card-center">
                <p
                  style={{
                    fontSize: "80px",
                    fontWeight: "600",
                    color: "#B1D952",
                    display: "flex",
                  }}
                >
                  {data?.averageTime}
                </p>
              </SplitItem>
            </Split>

            <h4
              className="stat-card-center pf-u-p-lg"
              style={{
                color: "#000",
                fontWeight: "700",
                fontSize: "30px",
              }}
            >
              Average deployment time
            </h4>
            {/* </div> */}
          </Card>
        </GridItem>
      </Grid>
    </>
  );
}

export default Count;
