"use client";
import "./pagestyle.css";
import React from "react";
import {
  Card,
  CardTitle,
  CardBody,
  Grid,
  GridItem,
} from "@patternfly/react-core";
import Count from "./components/Count/Count";
export default function Home() {
  return (
    <>
      <div className="welcome">
        <h1 className="welcome-title">
          <span className="welcome-text">Welcome to </span>
          <span className="brand-text">SPAship</span>
        </h1>
        <h2 className="introduction-text">
          SPAship is an open source platform for deploying, integrating, and
          managing single-page apps (SPAs).
        </h2>
        <br />
        <Count />
        <h2 className="features-heading">Key Features of SPAship</h2>
        <Grid style={{ margin: "0% 11% 11% 11%" }}>
          <GridItem span={4}>
            <div className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  {" "}
                  <div className="center">
                    <img
                      src="/img/box.gif"
                      style={{ width: "200px", height: "200px" }}
                    />
                    <h3 style={{ color: "#FD8F01", fontWeight: "700" }}>
                      Containerized Deployment
                    </h3>
                  </div>
                </div>
                <div
                  className="flip-card-back"
                  style={{ backgroundColor: "#fbc3a3" }}
                >
                  <p>
                    Elevate deployment with SPAship: Unleash automated builds
                    via containers & Gitflow. SSR support made easy; deploy
                    diverse apps effortlessly. Overcome limits, customize health
                    checks, images, and configurations. Embrace SPAship for
                    flexible, efficient deployment.
                  </p>
                </div>
              </div>
            </div>
          </GridItem>
          <GridItem span={4}>
            <div className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  {/* <h1 className="center">Role Base Access System</h1> */}
                  <div className="center">
                    <img
                      src="/img/video-conference.gif"
                      style={{ width: "200px", height: "200px" }}
                    />
                    <h3 style={{ color: "#BC9AF4", fontWeight: "700" }}>
                      Role Base Access System
                    </h3>
                  </div>
                </div>
                <div
                  className="flip-card-back"
                  style={{ backgroundColor: "#e3d5fa" }}
                >
                  Boosts security by assigning specific permissions based on
                  roles. Owners and Users roles streamline access management,
                  including "Permission Creation & Deletion." It simplifies
                  member search, access assignment, and Rover Group support
                  while preventing self-deletion or access revocation. Property
                  Creators get default access to new properties, elevating
                  security and access control.
                </div>
              </div>
            </div>
          </GridItem>
          <GridItem span={4}>
            <div className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <div className="center">
                    <img
                      src="/img/monitor.gif"
                      style={{ width: "200px", height: "200px" }}
                    />
                    <h3 style={{ color: "#e9c46c", fontWeight: "700" }}>CLI</h3>
                  </div>
                </div>
                <div
                  className="flip-card-back"
                  style={{ backgroundColor: "#fef1d0" }}
                >
                  The command-line support in this platform offers a
                  developer-friendly solution for initiating and deploying
                  Single Page Applications (SPAs) to your portal. It streamlines
                  your workflow, providing intuitive commands to simplify tasks
                  related to SPAs. Whether you're starting from scratch or
                  updating your SPAs, this feature ensures efficient management
                  and smooth deployment.
                </div>
              </div>
            </div>
          </GridItem>
          <GridItem span={4}>
            <div className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <div className="center">
                    <img
                      src="/img/update.gif"
                      style={{ width: "200px", height: "200px" }}
                    />
                    <h3 style={{ color: "#052A75", fontWeight: "700" }}>
                      Sync
                    </h3>
                  </div>
                </div>
                <div
                  className="flip-card-back"
                  style={{ backgroundColor: "#D2DCFD" }}
                >
                  Seamlessly integrated with Apache SSI, streamlines content
                  management by dynamically injecting and updating common web
                  page sections. This innovative approach ensures a consistent,
                  error-free user experience, simplifies web development, and
                  enhances website reliability. Unlock the power of effortless
                  content synchronization with SPAship Sync.
                </div>
              </div>
            </div>
          </GridItem>
          <GridItem span={4}>
            <div className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <div className="center">
                    <img
                      src="/img/startup.gif"
                      style={{ width: "200px", height: "200px" }}
                    />
                    <h3 style={{ color: "#FD6050", fontWeight: "700" }}>
                      Realtime deployment status
                    </h3>
                  </div>
                </div>
                <div
                  className="flip-card-back"
                  style={{ backgroundColor: "#feb6af" }}
                >
                  Offers instant insights into deployment activities. Integrates
                  easily across platforms for enhanced analytics and
                  notifications, emitting a range of events from initiation to
                  completion without extra setup. Stay in control with SPAship's
                  Realtime Deployment Status for seamless deployment management.
                </div>
              </div>
            </div>
          </GridItem>
          <GridItem span={4}>
            <div className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <div className="center">
                    <img
                      src="/img/view.gif"
                      style={{ width: "200px", height: "200px" }}
                    />
                    <h3 style={{ color: "#67CCD1", fontWeight: "700" }}>
                      Ephemeral Preview
                    </h3>
                  </div>
                </div>
                <div
                  className="flip-card-back"
                  style={{ backgroundColor: "#bfe9ec" }}
                >
                  Accelerates development by automating static distribution
                  creation from merge requests. It seamlessly creates ephemeral
                  environments for pull requests, monitors activities, and
                  provides access to the latest deployments via an intuitive
                  manager interface. Elevate your development workflow with
                  SPAship's Ephemeral Preview for faster testing and
                  collaboration.
                </div>
              </div>
            </div>
          </GridItem>
        </Grid>

        <h2 className="comparison-heading">Supported SPA Deployments</h2>
        <Grid style={{ margin: "5% 11% 3% 11%" }}>
          <GridItem span={8}>
            <Card isRounded isFullHeight ouiaId="BasicCard">
              <CardTitle
                style={{
                  color: "black",
                  fontSize: "30px!important",
                  fontWeight: "bold",
                }}
              >
                Static Deployment
              </CardTitle>
              <CardBody>
                <p>
                  Unlock the Future of Application Deployment with SPAship's
                  Containerized Magic:
                </p>
                {/* <ul
                  style={{
                    listStyleType: "circle",
                    marginTop: "16px",
                    marginLeft: "20px",
                    marginBottom: "16px",
                  }}
                >
                  <li className="pf-u-mt-md">
                    Deploys applications using MPaaS (Multi-Platform as a
                    Service).
                  </li>
                  <li className="pf-u-mt-md">
                    Architecture utilizes Openshift 3 and 4, Kubernetes, and
                    Minikube.
                  </li>
                  <li className="pf-u-mt-md">
                    Adopts a Declarative & GitOps approach for SPA deployment.
                  </li>
                  <li className="pf-u-mt-md">
                    Developers upload SPA files to a Git repository, triggering
                    deployment through a webhook.
                  </li>
                  <li className="pf-u-mt-md">
                    SPA deployment configuration is defined in website.yaml
                    within GitOps.
                  </li>
                  <li className="pf-u-mt-md">
                    Stateless operator components include Website Runtime
                    (spaship/httpd), File System (Pod Volume), and Operator.
                  </li>
                  <li className="pf-u-mt-md">
                    The operator replaces the database with a Native K8s CRD and
                    the router with Openshift Route/K8s Ingress.
                  </li>
                  <li className="pf-u-mt-md">
                    CLI is predominantly standard GIT CLI.
                  </li>
                  <li className="pf-u-mt-md">
                    Supports multi-tenancy with a single operator for all
                    websites.
                  </li>
                </ul> */}
                <ul
                  style={{
                    listStyleType: "circle",
                    marginTop: "16px",
                    marginLeft: "20px",
                    marginBottom: "16px",
                  }}
                >
                  <li className="pf-u-mt-md">
                    <strong>Deploys applications</strong> using MPaaS
                    (Multi-Platform as a Service).
                  </li>
                  <li className="pf-u-mt-md">
                    <strong>Architecture</strong> utilizes Openshift 3 and 4,
                    Kubernetes, and Minikube.
                  </li>
                  <li className="pf-u-mt-md">
                    Adopts a <strong>Declarative & GitOps approach</strong> for
                    SPA deployment.
                  </li>
                  <li className="pf-u-mt-md">
                    <strong>Developers</strong> upload SPA files to a Git
                    repository, triggering deployment through a webhook.
                  </li>
                  <li className="pf-u-mt-md">
                    SPA deployment configuration is defined in{" "}
                    <strong>website.yaml</strong> within GitOps.
                  </li>
                  <li className="pf-u-mt-md">
                    <strong>Stateless operator components</strong> include
                    Website Runtime (spaship/httpd), File System (Pod Volume),
                    and Operator.
                  </li>
                  <li className="pf-u-mt-md">
                    The operator replaces the database with a{" "}
                    <strong>Native K8s CRD</strong> and the router with
                    Openshift Route/K8s Ingress.
                  </li>
                  <li className="pf-u-mt-md">
                    <strong>CLI</strong> is predominantly standard GIT CLI.
                  </li>
                  <li className="pf-u-mt-md">
                    Supports <strong>multi-tenancy</strong> with a single
                    operator for all websites.
                  </li>
                </ul>
                The SPAship experience and make application deployment a breeze.
                Revolutionize your development process today!
              </CardBody>
            </Card>
          </GridItem>
          <GridItem span={4}>
            <Card isRounded isFullHeight ouiaId="BasicCard">
              <CardTitle></CardTitle>
              <CardBody>
                <img
                  src="img/list.gif"
                  alt=""
                  style={{ height: "300px", width: "300px" }}
                />
              </CardBody>
            </Card>
          </GridItem>
        </Grid>
        <Grid style={{ margin: "0% 11% 11% 11%" }}>
          <GridItem span={4}>
            <Card
              isRounded
              isFullHeight
              ouiaId="BasicCard"
              className="custom-card"
            >
              <CardBody>
                <img
                  src="img/delivery-completed.gif"
                  alt=""
                  style={{ height: "300px", width: "300px" }}
                />
              </CardBody>
            </Card>
          </GridItem>
          <GridItem span={8}>
            <Card
              isRounded
              isFullHeight
              ouiaId="BasicCard"
              className="custom-card"
            >
              <CardTitle
                style={{
                  color: "black",
                  fontSize: "30px!important",
                  fontWeight: "bold",
                }}
              >
                Containerized Deployment
              </CardTitle>
              <CardBody>
                <p>
                  Unlock the Future of Application Deployment with SPAship's
                  Containerized Magic:
                </p>
                <ul
                  style={{
                    listStyleType: "circle",
                    marginTop: "16px",
                    marginLeft: "20px",
                    marginBottom: "16px",
                  }}
                >
                  <li className="pf-u-mt-md">
                    <strong>Server-Side Rendering (SSR):</strong> Harness the
                    power of rendering web pages on the server for enhanced user
                    experiences and achieve faster load times by serving fully
                    rendered pages to client browsers.
                  </li>
                  <li className="pf-u-mt-md">
                    <strong>Containerized Deployment:</strong> Utilize SPAship's
                    containerization for efficient and scalable SSR application
                    deployments and seamlessly support SSR applications with
                    dedicated runtime environments.
                  </li>
                  <li className="pf-u-mt-md">
                    <strong>SPAship Workflow 3.0:</strong> Experience a
                    streamlined development process with SPAship Workflow 3.0,
                    from building to deployment and hosting, all handled
                    seamlessly by SPAship.
                  </li>
                  <li className="pf-u-mt-md">
                    <strong>Repository Validation:</strong> Ensure deployment
                    success in Workflow 3.0 with crucial repository validation
                    and verify the presence of Dockerfiles to initiate seamless
                    deployment processes.
                  </li>
                  <li className="pf-u-mt-md">
                    <strong>One-Click Redeployment:</strong> Simplify
                    configuration changes without rebuilding the entire
                    application and expedite deployment by updating specific
                    settings with ease.
                  </li>
                  <li className="pf-u-mt-md">
                    <strong>Log Management:</strong> Access build and pod logs
                    effortlessly via SPAship manager, facilitating debugging and
                    monitoring for seamless application management.
                  </li>
                  <li className="pf-u-mt-md">
                    <strong>Origin of the Idea:</strong> Explore the genesis of
                    SPAship and its role in addressing developer challenges,
                    gaining insights into how SPAship streamlines repository
                    management, CI/CD pipelines, and hosting environments for
                    developers.
                  </li>
                </ul>
                The SPAship experience and make application deployment a breeze.
                Revolutionize your development process today!
              </CardBody>
            </Card>
          </GridItem>
        </Grid>
      </div>
    </>
  );
}
