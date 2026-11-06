import * as THREE from 'three';
import { OrbitControls } from '../vendor/three/examples/jsm/controls/OrbitControls.js';
import { STLLoader } from '../vendor/three/examples/jsm/loaders/STLLoader.js';

export const URDF_CASES = [
  {
    id: 'car_example_1',
    label: 'Car - Example 1',
    urdf: './public/assets/urdf/car_example_1/car_example_1.urdf',
    basePath: './public/assets/urdf/car_example_1/',
    video: './public/assets/videos/web/car_example_1_web.mp4',
    poster: './public/assets/posters/car_example_1.jpg',
    upAxis: 'z',
    animationMode: 'car-example-1-sequence',
    animationSpeed: 1.22,
    viewerScale: 1.28,
    videoTitle: 'Car articulation sketch record',
    description:
      'A recorded sketching session turns a static car model into the articulated URDF animation shown above.',
  },
  {
    id: 'car_example_2',
    label: 'Car - Example 2',
    urdf: './public/assets/urdf/car_example_2/car_example_2.urdf',
    basePath: './public/assets/urdf/car_example_2/',
    video: './public/assets/videos/web/car_example_2_web.mp4',
    poster: './public/assets/posters/car_example_2.jpg',
    upAxis: 'z',
    previewScale: 1.36,
    viewerScale: 1.02,
    animationSpeed: 1.18,
    videoTitle: 'Car articulation sketch record',
    description:
      'A car case showing sketch-driven articulation on a different static vehicle model.',
  },
  {
    id: 'car_butterfly_doors',
    label: 'Car - Butterfly Doors',
    urdf: './public/assets/urdf/car_butterfly_doors/car_butterfly_doors.urdf',
    basePath: './public/assets/urdf/car_butterfly_doors/',
    video: './public/assets/videos/web/car_butterfly_doors_web.mp4',
    upAxis: 'z',
    previewScale: 1.34,
    viewerScale: 1.28,
    previewOffset: { y: 0.22 },
    animationSpeed: 1.32,
    videoTitle: 'Car Example 2 articulation result',
    animationMode: 'synchronized-doors',
    description:
      'A second car case with synchronized door joints from the test_case/Car_Example2 assets.',
  },
  {
    id: 'car_backward_hinged',
    label: 'Car - Backward-Hinged Doors',
    urdf: './public/assets/urdf/car_backward_hinged/car_backward_hinged.urdf',
    basePath: './public/assets/urdf/car_backward_hinged/',
    video: './public/assets/videos/web/car_backward_hinged_web.mp4',
    poster: './public/assets/posters/car_backward_hinged.jpg',
    upAxis: 'z',
    previewScale: 1.28,
    viewerScale: 1.36,
    animationMode: 'synchronized-doors',
    animationSpeed: 1.18,
    videoTitle: 'Car backward-hinged articulation result',
    description: '',
  },
  {
    id: 'bike',
    label: 'Bike',
    urdf: './public/assets/urdf/bike/bike.urdf',
    basePath: './public/assets/urdf/bike/',
    video: './public/assets/videos/web/bike_web.mp4',
    upAxis: 'z',
    previewScale: 1.32,
    videoTitle: 'Bike articulation result',
    description:
      'Bike test case with three continuous wheel or handle-related joints.',
  },
  {
    id: 'motorbike',
    label: 'Motorbike',
    urdf: './public/assets/urdf/motorbike/motorbike.urdf',
    basePath: './public/assets/urdf/motorbike/',
    video: './public/assets/videos/web/motorbike_web.mp4',
    poster: './public/assets/posters/motorbike.jpg',
    upAxis: 'z',
    previewScale: 1.26,
    videoTitle: 'Motorbike articulation result',
    description:
      'Motorbike case with sketch-driven wheel articulation.',
  },
  {
    id: 'drawer',
    label: 'Drawer',
    urdf: './public/assets/urdf/drawer/drawer.urdf',
    basePath: './public/assets/urdf/drawer/',
    video: './public/assets/videos/web/drawer_web.mp4',
    upAxis: 'y',
    animationMode: 'drawer-slide',
    animationSpeed: 1.32,
    previewScale: 0.84,
    viewerScale: 0.94,
    previewOffset: { x: -0.34, y: 0.04 },
    previewCameraPosition: [-3.4, 2.25, 3.6],
    viewerCameraPosition: [-3.4, 2.25, 3.6],
    videoTitle: 'Drawer articulation result',
    description:
      'Drawer case with prismatic and revolute joints from the test_case/Drawer assets.',
  },
  {
    id: 'refrigerator',
    label: 'Refrigerator',
    urdf: './public/assets/urdf/refrigerator/refrigerator.urdf',
    basePath: './public/assets/urdf/refrigerator/',
    video: './public/assets/videos/web/refrigerator_web.mp4',
    upAxis: 'z',
    videoTitle: 'Refrigerator articulation result',
    description:
      'Refrigerator case with two revolute door joints and matched STL meshes.',
  },
  {
    id: 'washing_machine_left',
    label: 'Washing Machine - Left Swing',
    urdf: './public/assets/urdf/washing_machine_left/washing_machine_left.urdf',
    basePath: './public/assets/urdf/washing_machine_left/',
    video: './public/assets/videos/web/washing_machine_left_web.mp4',
    upAxis: 'z',
    previewScale: 0.88,
    previewOffset: { y: 0.02 },
    videoTitle: 'Washing Machine 1 articulation result',
    description:
      'Washing machine case with a revolute door joint.',
  },
  {
    id: 'washing_machine_right',
    label: 'Washing Machine - Right Swing',
    urdf: './public/assets/urdf/washing_machine_right/washing_machine_right.urdf',
    basePath: './public/assets/urdf/washing_machine_right/',
    video: './public/assets/videos/web/washing_machine_right_web.mp4',
    upAxis: 'z',
    previewScale: 0.88,
    previewOffset: { y: 0.02 },
    videoTitle: 'Washing Machine 2 articulation result',
    description:
      'Second washing machine case with a revolute door joint.',
  },
  {
    id: 'windmill',
    label: 'Windmill',
    urdf: './public/assets/urdf/windmill/windmill.urdf',
    basePath: './public/assets/urdf/windmill/',
    video: './public/assets/videos/web/windmill_web.mp4',
    upAxis: 'z',
    videoTitle: 'Windmill articulation result',
    description:
      'Windmill case with one continuous rotation joint. The source MKV from test_case/Windmill_0027 is remuxed to MP4 for browser playback.',
  },
  {
    id: 'fan_collision',
    label: 'Fan - Collision',
    urdf: './public/assets/urdf/fan_collision/fan_collision.urdf',
    basePath: './public/assets/urdf/fan_collision/',
    video: './public/assets/videos/web/fan_collision_web.mp4',
    poster: './public/assets/posters/fan_collision.jpg',
    upAxis: 'z',
    previewScale: 1.03,
    viewerScale: 0.9,
    previewCameraPosition: [4.65, 2.05, 1.15],
    viewerCameraPosition: [4.65, 2.05, 1.15],
    videoTitle: 'Fan articulation sketch record',
    description:
      'A fan case where motion exposes the articulation behavior of an existing static mesh.',
  },
  {
    id: 'drawer_interior_completion',
    label: 'Drawer - Interior Completion',
    urdf: './public/assets/urdf/drawer_interior_completion/drawer_interior_completion.urdf',
    basePath: './public/assets/urdf/drawer_interior_completion/',
    video: './public/assets/videos/web/drawer_interior_completion_web.mp4',
    upAxis: 'y',
    animationMode: 'urdf-limits',
    animationSpeed: 1.32,
    previewScale: 0.86,
    viewerScale: 0.86,
    groundPose: 'max',
    prismaticOpenAt: 'min',
    previewOffset: { y: 0.04 },
    previewCameraPosition: [-3.4, 2.25, 3.6],
    viewerCameraPosition: [-3.4, 2.25, 3.6],
    videoTitle: 'Interior completion drawer result',
    description:
      'Special completion case with a prismatic motion model and generated interior meshes.',
  },
];

const MOVABLE_COLORS = [
  0x0d766d,
  0xb85235,
  0x2f6380,
  0xbe8b24,
  0x6d5b9a,
  0x4d7f43,
  0xa54662,
  0x486f8a,
];

const DEFAULT_REVOLUTE_RANGE = Math.PI * 0.72;
const DEFAULT_PRISMATIC_RANGE = 0.45;
const DEFAULT_AUTOPLAY_SPEED = 1.32;
const DEFAULT_VIEWER_AREA_COVERAGE = 1.18;
const DEFAULT_VIEWER_MAX_COVERAGE = 1.66;

export class ArticulationViewer {
  constructor(options) {
    this.canvas = options.canvas;
    this.statusEl = options.statusEl;
    this.selectedJointEl = options.selectedJointEl;
    this.jointControlsEl = options.jointControlsEl;
    this.caseSelect = options.caseSelect;
    this.resetCameraButton = options.resetCameraButton;
    this.resetJointsButton = options.resetJointsButton;
    this.autoplayButton = options.autoplayButton;
    this.cases = options.cases || [];
    this.onCaseChange = options.onCaseChange || (() => {});
    this.compact = Boolean(options.compact);

    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0xf6f8f5);

    this.camera = new THREE.PerspectiveCamera(45, 1, 0.01, 100);
    this.camera.position.set(3.4, 2.2, 3.6);

    this.renderer = new THREE.WebGLRenderer({
      canvas: this.canvas,
      antialias: true,
      alpha: false,
      powerPreference: 'high-performance',
    });
    const pixelRatioLimit = this.compact ? 1.25 : 2;
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, pixelRatioLimit));
    this.renderer.shadowMap.enabled = !this.compact;
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    this.renderer.outputEncoding = THREE.sRGBEncoding;

    this.controls = new OrbitControls(this.camera, this.canvas);
    this.controls.enabled = !this.compact;
    this.controls.enableDamping = !this.compact;
    this.controls.dampingFactor = 0.08;
    this.controls.target.set(0, 0, 0);

    this.stlLoader = new STLLoader();
    this.raycaster = new THREE.Raycaster();
    this.pointer = new THREE.Vector2();
    this.clock = new THREE.Clock();
    this.robotFrame = null;
    this.joints = [];
    this.interactiveMeshes = [];
    this.activeJointIndex = -1;
    this.dragState = null;
    this.autoplay = true;
    this.currentCase = null;
    this.loadToken = 0;
    this.isRunning = false;
    this.animationFrameId = null;
    this.resizeObserver = null;
    this.groundGrid = null;
    this.groundFloor = null;

    this.setupScene();
    this.setupEvents();
    this.populateCaseSelect();
    this.resize();
    this.startAnimation();
  }

  setupScene() {
    const hemi = new THREE.HemisphereLight(0xffffff, 0xb8c0bb, 0.88);
    this.scene.add(hemi);

    const key = new THREE.DirectionalLight(0xffffff, 1.12);
    key.position.set(4, 6, 5);
    key.castShadow = true;
    key.shadow.mapSize.set(1024, 1024);
    this.scene.add(key);

    const fill = new THREE.DirectionalLight(0xb9d7ff, 0.34);
    fill.position.set(-4, 3, -2);
    this.scene.add(fill);

    this.groundGrid = new THREE.GridHelper(4.8, 24, 0xc9d2ce, 0xe0e7e4);
    this.groundGrid.position.y = -1.05;
    this.scene.add(this.groundGrid);

    this.groundFloor = new THREE.Mesh(
      new THREE.PlaneGeometry(7, 7),
      new THREE.ShadowMaterial({ opacity: 0.12 }),
    );
    this.groundFloor.rotation.x = -Math.PI / 2;
    this.groundFloor.position.y = -1.08;
    this.groundFloor.receiveShadow = true;
    this.scene.add(this.groundFloor);
  }

  setupEvents() {
    if (!this.compact) {
      window.addEventListener('resize', () => this.resize());
    }

    if ('ResizeObserver' in window) {
      this.resizeObserver = new ResizeObserver(() => this.resize());
      this.resizeObserver.observe(this.canvas.parentElement);
    }

    if (this.caseSelect) {
      this.caseSelect.addEventListener('change', () => {
        this.loadCase(this.caseSelect.value);
      });
    }

    this.resetCameraButton?.addEventListener('click', () => this.resetCamera());
    this.resetJointsButton?.addEventListener('click', () => this.resetJoints());
    this.autoplayButton?.addEventListener('click', () => {
      this.setAutoplay(!this.autoplay);
    });

    if (!this.compact) {
      this.canvas.addEventListener('pointerdown', (event) => this.onPointerDown(event));
      this.canvas.addEventListener('pointermove', (event) => this.onPointerMove(event));
      window.addEventListener('pointerup', () => this.onPointerUp());
      window.addEventListener('pointercancel', () => this.onPointerUp());
    }
  }

  populateCaseSelect() {
    if (!this.caseSelect) {
      return;
    }

    this.caseSelect.innerHTML = '';
    this.cases.forEach((item) => {
      const option = document.createElement('option');
      option.value = item.id;
      option.textContent = item.label;
      this.caseSelect.append(option);
    });
  }

  async loadCase(caseId) {
    const config = this.cases.find((item) => item.id === caseId) || this.cases[0];
    if (!config) {
      return;
    }

    this.loadToken += 1;
    const token = this.loadToken;
    if (this.caseSelect) {
      this.caseSelect.value = config.id;
    }
    this.currentCase = config;
    this.setStatus('Loading URDF...');
    this.onCaseChange(config);
    this.clearRobot();
    this.renderJointControls([]);

    try {
      const response = await fetch(config.urdf);
      if (!response.ok) {
        throw new Error(`Could not fetch ${config.urdf}`);
      }

      const urdfText = await response.text();
      const robotFrame = await this.buildRobotFromUrdf(urdfText, config, token);

      if (token !== this.loadToken) {
        this.disposeObject(robotFrame);
        return;
      }

      this.robotFrame = robotFrame;
      applyCaseUpAxis(this.robotFrame, config.upAxis);
      this.scene.add(this.robotFrame);
      this.normalizeRobot();
      this.renderJointControls(this.joints);
      this.resetJoints(false);
      this.updateGroundPlane();
      this.resetCamera();
      this.setStatus(`Loaded ${config.label}: ${this.joints.length} movable joints`);
    } catch (error) {
      console.error(error);
      this.setStatus(`URDF load failed: ${error.message}`);
    }
  }

  async buildRobotFromUrdf(urdfText, config, token) {
    const documentXml = new DOMParser().parseFromString(urdfText, 'application/xml');
    const parserError = documentXml.querySelector('parsererror');
    if (parserError) {
      throw new Error('URDF XML parser error');
    }

    const linkNodes = Array.from(documentXml.querySelectorAll('robot > link'));
    const jointNodes = Array.from(documentXml.querySelectorAll('robot > joint'));
    const links = new Map();
    const childToJoint = new Map();
    const jointsByParent = new Map();

    linkNodes.forEach((node) => {
      links.set(node.getAttribute('name'), {
        node,
        group: new THREE.Group(),
        meshes: [],
      });
    });

    const parsedJoints = jointNodes.map((node, index) => {
      const parent = node.querySelector('parent')?.getAttribute('link');
      const child = node.querySelector('child')?.getAttribute('link');
      const axisEl = node.querySelector('axis');
      const limitEl = node.querySelector('limit');
      const type = node.getAttribute('type') || 'fixed';
      const axis = parseVector(axisEl?.getAttribute('xyz'), [1, 0, 0]).normalize();
      const limits = parseLimits(type, limitEl);
      const joint = {
        index,
        name: node.getAttribute('name') || `joint_${index}`,
        label: compactJointName(node.getAttribute('name') || `joint_${index}`, index),
        type,
        parent,
        child,
        origin: parseOrigin(node.querySelector('origin')),
        axis,
        min: limits.min,
        max: limits.max,
        value: 0,
        originGroup: new THREE.Group(),
        motionGroup: new THREE.Group(),
        sliderEl: null,
        valueEl: null,
      };

      childToJoint.set(child, joint);
      if (!jointsByParent.has(parent)) {
        jointsByParent.set(parent, []);
      }
      jointsByParent.get(parent).push(joint);
      return joint;
    });

    this.joints = parsedJoints.filter((joint) => joint.type !== 'fixed');

    const visualTasks = [];
    links.forEach((link, linkName) => {
      const inbound = childToJoint.get(linkName);
      const colorIndex = inbound ? this.joints.indexOf(inbound) : -1;
      const material = createMaterial(colorIndex);
      const visuals = Array.from(link.node.querySelectorAll(':scope > visual'));

      visuals.forEach((visualNode) => {
        visualTasks.push(
          this.loadVisual(visualNode, link, linkName, material, config, token, visualTasks.length),
        );
      });
    });

    await Promise.all(visualTasks);

    const root = new THREE.Group();
    root.name = documentXml.querySelector('robot')?.getAttribute('name') || 'robot';

    const childLinks = new Set(parsedJoints.map((joint) => joint.child));
    const rootLinkNames = Array.from(links.keys()).filter((name) => !childLinks.has(name));
    const roots = rootLinkNames.length ? rootLinkNames : [linkNodes[0]?.getAttribute('name')];

    roots.forEach((rootName) => {
      if (links.has(rootName)) {
        root.add(links.get(rootName).group);
        attachChildren(rootName);
      }
    });

    parsedJoints.forEach((joint) => {
      if (joint.type === 'fixed') {
        return;
      }

      const child = links.get(joint.child);
      if (!child) {
        return;
      }

      child.meshes.forEach((mesh) => {
        mesh.userData.jointIndex = this.joints.indexOf(joint);
        this.interactiveMeshes.push(mesh);
      });

      const marker = createJointMarker(joint);
      joint.originGroup.add(marker);
    });

    const allMeshes = [];
    root.traverse((object) => {
      if (object.isMesh) {
        allMeshes.push(object);
      }
    });

    if (!allMeshes.length) {
      throw new Error('No STL meshes were loaded from this URDF');
    }

    return root;

    function attachChildren(parentName) {
      const childJoints = jointsByParent.get(parentName) || [];

      childJoints.forEach((joint) => {
        const parentLink = links.get(joint.parent);
        const childLink = links.get(joint.child);

        if (!parentLink || !childLink) {
          return;
        }

        applyOriginToGroup(joint.originGroup, joint.origin);
        joint.originGroup.add(joint.motionGroup);
        joint.motionGroup.add(childLink.group);
        parentLink.group.add(joint.originGroup);
        attachChildren(joint.child);
      });
    }
  }

  loadVisual(visualNode, link, linkName, material, config, token, taskIndex) {
    const meshNode = visualNode.querySelector('geometry > mesh');
    const filename = meshNode?.getAttribute('filename');

    if (!filename) {
      return Promise.resolve();
    }

    const visualGroup = new THREE.Group();
    visualGroup.name = `${linkName}_visual_${taskIndex}`;
    applyOriginToGroup(visualGroup, parseOrigin(visualNode.querySelector('origin')));
    link.group.add(visualGroup);

    const meshUrl = resolveMeshUrl(filename, config.basePath);

    return new Promise((resolve, reject) => {
      this.stlLoader.load(
        meshUrl,
        (geometry) => {
          if (token !== this.loadToken) {
            geometry.dispose();
            resolve();
            return;
          }

          geometry.computeVertexNormals();
          geometry.computeBoundingBox();
          const mesh = new THREE.Mesh(geometry, material.clone());
          mesh.name = filename.split('/').pop() || filename;
          mesh.userData.linkName = linkName;
          mesh.castShadow = true;
          mesh.receiveShadow = true;
          visualGroup.add(mesh);
          link.meshes.push(mesh);
          this.setStatus(`Loading meshes... ${taskIndex + 1}`);
          resolve();
        },
        undefined,
        reject,
      );
    });
  }

  clearRobot() {
    if (this.robotFrame) {
      this.scene.remove(this.robotFrame);
      this.disposeObject(this.robotFrame);
      this.robotFrame = null;
    }

    this.joints = [];
    this.interactiveMeshes = [];
    this.activeJointIndex = -1;
  }

  disposeObject(object) {
    object.traverse((child) => {
      if (child.geometry) {
        child.geometry.dispose();
      }

      if (child.material) {
        const materials = Array.isArray(child.material) ? child.material : [child.material];
        materials.forEach((material) => material.dispose());
      }
    });
  }

  normalizeRobot() {
    if (!this.robotFrame) {
      return;
    }

    const box = this.getMotionAwareBox();
    const size = new THREE.Vector3();
    const center = new THREE.Vector3();
    box.getSize(size);
    box.getCenter(center);

    const maxDimension = Math.max(size.x, size.y, size.z) || 1;
    const viewScale = this.compact ? this.currentCase?.previewScale || 1 : this.currentCase?.viewerScale || 1;
    const scale = this.compact
      ? (3.15 * viewScale) / maxDimension
      : computeProjectedFitScale({
          box,
          center,
          camera: this.camera,
          cameraPosition: getCaseCameraPosition(this.currentCase, false),
          targetAreaCoverage: DEFAULT_VIEWER_AREA_COVERAGE * viewScale,
          maxCoverage: DEFAULT_VIEWER_MAX_COVERAGE,
        });
    this.robotFrame.scale.setScalar(scale);
    this.robotFrame.position.set(-center.x * scale, -center.y * scale, -center.z * scale);
    const viewOffset = this.compact ? this.currentCase?.previewOffset : this.currentCase?.viewerOffset;
    if (viewOffset) {
      const offset = viewOffset;
      this.robotFrame.position.x += offset.x || 0;
      this.robotFrame.position.y += offset.y || 0;
      this.robotFrame.position.z += offset.z || 0;
    }
    this.robotFrame.updateMatrixWorld(true);
  }

  getMotionAwareBox() {
    this.robotFrame.updateMatrixWorld(true);
    const unionBox = new THREE.Box3().setFromObject(this.robotFrame);
    const sampledJoints = this.joints.filter(
      (joint) => joint.type === 'prismatic' || joint.type === 'revolute',
    );

    if (!sampledJoints.length) {
      return unionBox;
    }

    const originalValues = this.joints.map((joint) => joint.value);
    const addPoseToBox = () => {
      this.robotFrame.updateMatrixWorld(true);
      unionBox.union(new THREE.Box3().setFromObject(this.robotFrame));
    };

    this.joints.forEach((joint, index) => {
      if (joint.type === 'continuous') {
        this.setJointValue(index, 0, false);
      } else {
        this.setJointValue(index, joint.min, false);
      }
    });
    addPoseToBox();

    this.joints.forEach((joint, index) => {
      if (joint.type === 'continuous') {
        this.setJointValue(index, 0, false);
      } else {
        this.setJointValue(index, joint.max, false);
      }
    });
    addPoseToBox();

    originalValues.forEach((value, index) => this.setJointValue(index, value, false));
    this.robotFrame.updateMatrixWorld(true);
    return unionBox;
  }

  updateGroundPlane() {
    if (!this.robotFrame || !this.groundGrid || !this.groundFloor) {
      return;
    }

    const box = this.getGroundAnchorBox();
    const center = new THREE.Vector3();
    box.getCenter(center);
    const groundY = box.min.y - (this.compact ? 0.018 : 0.026);

    this.groundGrid.position.x = center.x;
    this.groundGrid.position.y = groundY;
    this.groundGrid.position.z = center.z;
    this.groundFloor.position.x = center.x;
    this.groundFloor.position.y = groundY - 0.018;
    this.groundFloor.position.z = center.z;
  }

  getGroundAnchorBox() {
    if (!this.currentCase?.groundPose) {
      this.robotFrame.updateMatrixWorld(true);
      return new THREE.Box3().setFromObject(this.robotFrame);
    }

    const originalValues = this.joints.map((joint) => joint.value);
    this.joints.forEach((joint, index) => {
      if (joint.type === 'continuous') {
        this.setJointValue(index, 0, false);
      } else if (this.currentCase.groundPose === 'max') {
        this.setJointValue(index, joint.max, false);
      } else if (this.currentCase.groundPose === 'min') {
        this.setJointValue(index, joint.min, false);
      }
    });

    this.robotFrame.updateMatrixWorld(true);
    const box = new THREE.Box3().setFromObject(this.robotFrame);
    originalValues.forEach((value, index) => this.setJointValue(index, value, false));
    this.robotFrame.updateMatrixWorld(true);
    return box;
  }

  renderJointControls(joints) {
    if (!this.jointControlsEl) {
      return;
    }

    this.jointControlsEl.innerHTML = '';

    if (!joints.length) {
      const empty = document.createElement('p');
      empty.className = 'empty-joints';
      empty.textContent = 'No movable joints found in this URDF.';
      this.jointControlsEl.append(empty);
      return;
    }

    joints.forEach((joint, index) => {
      const row = document.createElement('label');
      row.className = 'joint-row';

      const name = document.createElement('span');
      name.className = 'joint-name';
      name.textContent = `${joint.label} (${joint.type})`;

      const value = document.createElement('span');
      value.className = 'joint-value';

      const slider = document.createElement('input');
      slider.type = 'range';
      slider.min = String(joint.min);
      slider.max = String(joint.max);
      slider.step = joint.type === 'prismatic' ? '0.005' : '0.01';
      slider.value = '0';
      slider.addEventListener('input', () => {
        this.setJointValue(index, Number(slider.value));
        this.selectJoint(index);
      });

      joint.sliderEl = slider;
      joint.valueEl = value;

      row.append(name, value, slider);
      this.jointControlsEl.append(row);
      this.updateJointReadout(joint);
    });
  }

  setJointValue(index, value, syncSlider = true) {
    const joint = this.joints[index];
    if (!joint) {
      return;
    }

    joint.value =
      joint.type === 'continuous'
        ? wrapAngle(value)
        : THREE.MathUtils.clamp(value, joint.min, joint.max);

    if (joint.type === 'prismatic') {
      joint.motionGroup.position.copy(joint.axis).multiplyScalar(joint.value);
      joint.motionGroup.quaternion.identity();
    } else {
      joint.motionGroup.position.set(0, 0, 0);
      joint.motionGroup.quaternion.setFromAxisAngle(joint.axis, joint.value);
    }

    if (syncSlider && joint.sliderEl) {
      joint.sliderEl.value = String(joint.value);
    }

    this.updateJointReadout(joint);
  }

  updateJointReadout(joint) {
    if (!joint.valueEl) {
      return;
    }

    if (joint.type === 'prismatic') {
      const travel = joint.max === joint.min ? 0 : (joint.value - joint.min) / (joint.max - joint.min);
      const openAmount = this.currentCase?.prismaticOpenAt === 'min' ? 1 - travel : travel;
      const percentage = Math.round(THREE.MathUtils.clamp(openAmount, 0, 1) * 100);
      joint.valueEl.textContent = `${percentage}% open`;
      return;
    }

    const degrees = THREE.MathUtils.radToDeg(joint.value);
    joint.valueEl.textContent = `${degrees.toFixed(0)} deg`;
  }

  resetJoints(announce = true) {
    this.joints.forEach((joint, index) => {
      const defaultValue = joint.min <= 0 && joint.max >= 0 ? 0 : joint.min;
      this.setJointValue(index, defaultValue);
    });

    if (announce) {
      this.setStatus('Joint values reset.');
    }
  }

  resetCamera() {
    const cameraPosition = getCaseCameraPosition(this.currentCase, this.compact);
    this.camera.position.set(cameraPosition[0], cameraPosition[1], cameraPosition[2]);
    this.camera.near = 0.01;
    this.camera.far = 100;
    this.camera.updateProjectionMatrix();
    this.controls.target.set(0, 0, 0);
    this.controls.update();
  }

  setAutoplay(enabled) {
    this.autoplay = enabled;
    this.autoplayButton?.classList.toggle('active', enabled);
    if (this.autoplayButton) {
      this.autoplayButton.textContent = enabled ? 'Auto Animation' : 'Auto Animation Off';
    }
  }

  selectJoint(index) {
    this.activeJointIndex = index;
    const joint = this.joints[index];

    if (!joint) {
      if (this.selectedJointEl) {
        this.selectedJointEl.textContent = 'Select or drag a colored part.';
      }
      return;
    }

    if (this.selectedJointEl) {
      this.selectedJointEl.textContent = `Selected ${joint.label}. Drag left/right to move it.`;
    }

    this.interactiveMeshes.forEach((mesh) => {
      if (!mesh.material || !mesh.material.emissive) {
        return;
      }

      const selected = mesh.userData.jointIndex === index;
      mesh.material.emissive.setHex(selected ? 0x12302d : 0x000000);
      mesh.material.emissiveIntensity = selected ? 0.22 : 0;
    });
  }

  onPointerDown(event) {
    this.updatePointer(event);
    this.raycaster.setFromCamera(this.pointer, this.camera);

    const hits = this.raycaster.intersectObjects(this.interactiveMeshes, false);
    const hit = hits.find((item) => Number.isInteger(item.object.userData.jointIndex));

    if (!hit) {
      return;
    }

    const jointIndex = hit.object.userData.jointIndex;
    const joint = this.joints[jointIndex];

    if (!joint) {
      return;
    }

    event.preventDefault();
    this.selectJoint(jointIndex);
    this.controls.enabled = false;
    this.canvas.setPointerCapture(event.pointerId);
    this.dragState = {
      pointerId: event.pointerId,
      jointIndex,
      startX: event.clientX,
      startY: event.clientY,
      startValue: joint.value,
      range: Math.max(joint.max - joint.min, 0.001),
    };
  }

  onPointerMove(event) {
    if (!this.dragState) {
      return;
    }

    const dx = event.clientX - this.dragState.startX;
    const dy = event.clientY - this.dragState.startY;
    const delta = (dx - dy * 0.65) * 0.006 * this.dragState.range;
    this.setJointValue(this.dragState.jointIndex, this.dragState.startValue + delta);
  }

  onPointerUp() {
    if (!this.dragState) {
      return;
    }

    try {
      this.canvas.releasePointerCapture(this.dragState.pointerId);
    } catch (error) {
      // Pointer capture can already be released by the browser on cancel.
    }

    this.dragState = null;
    this.controls.enabled = true;
  }

  updatePointer(event) {
    const rect = this.canvas.getBoundingClientRect();
    this.pointer.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
    this.pointer.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;
  }

  resize() {
    const parent = this.canvas.parentElement;
    const width = Math.max(320, parent.clientWidth);
    const height = Math.max(240, parent.clientHeight);

    if (this.canvas.width !== Math.floor(width * this.renderer.getPixelRatio())) {
      this.renderer.setSize(width, height, false);
      this.camera.aspect = width / height;
      this.camera.updateProjectionMatrix();
    }
  }

  startAnimation() {
    if (this.isRunning) {
      return;
    }

    this.isRunning = true;
    this.animate();
  }

  stopAnimation() {
    this.isRunning = false;
    if (this.animationFrameId !== null) {
      cancelAnimationFrame(this.animationFrameId);
      this.animationFrameId = null;
    }
  }

  animate() {
    if (!this.isRunning) {
      return;
    }

    this.animationFrameId = requestAnimationFrame(() => this.animate());

    const elapsed = this.clock.getElapsedTime();
    if (this.autoplay && this.joints.length) {
      this.joints.forEach((joint, index) => {
        const value = getAutoplayValue(this.currentCase, joint, index, elapsed);
        this.setJointValue(index, value);
      });
    }

    this.controls.update();
    this.renderer.render(this.scene, this.camera);
  }

  setStatus(message) {
    if (this.statusEl) {
      this.statusEl.textContent = message;
      this.statusEl.classList.toggle('loaded', message.startsWith('Loaded '));
    }
  }

}

function getCaseCameraPosition(caseConfig, compact) {
  const caseCamera = compact ? caseConfig?.previewCameraPosition : caseConfig?.viewerCameraPosition;
  return Array.isArray(caseCamera) ? caseCamera : [3.4, 2.25, 3.6];
}

function computeProjectedFitScale({
  box,
  center,
  camera,
  cameraPosition,
  targetAreaCoverage,
  maxCoverage,
}) {
  const size = new THREE.Vector3();
  box.getSize(size);
  const maxDimension = Math.max(size.x, size.y, size.z) || 1;
  const fitCamera = camera.clone();
  fitCamera.position.set(cameraPosition[0], cameraPosition[1], cameraPosition[2]);
  fitCamera.lookAt(0, 0, 0);
  fitCamera.updateMatrixWorld(true);
  fitCamera.updateProjectionMatrix();

  let low = 0;
  let high = 3.15 / maxDimension;

  for (let i = 0; i < 10; i += 1) {
    const coverage = measureProjectedCoverage(box, center, high, fitCamera);
    if (coverage.area >= targetAreaCoverage || coverage.max >= maxCoverage) {
      break;
    }
    high *= 1.35;
  }

  for (let i = 0; i < 28; i += 1) {
    const mid = (low + high) / 2;
    const coverage = measureProjectedCoverage(box, center, mid, fitCamera);
    if (coverage.area > targetAreaCoverage || coverage.max > maxCoverage) {
      high = mid;
    } else {
      low = mid;
    }
  }

  return low || high;
}

function measureProjectedCoverage(box, center, scale, camera) {
  const corners = getBoxCorners(box);
  let minX = Infinity;
  let maxX = -Infinity;
  let minY = Infinity;
  let maxY = -Infinity;

  corners.forEach((corner) => {
    const projected = corner.sub(center).multiplyScalar(scale).project(camera);
    minX = Math.min(minX, projected.x);
    maxX = Math.max(maxX, projected.x);
    minY = Math.min(minY, projected.y);
    maxY = Math.max(maxY, projected.y);
  });

  const width = Math.max(0, maxX - minX);
  const height = Math.max(0, maxY - minY);
  return {
    area: Math.sqrt(width * height),
    max: Math.max(width, height),
  };
}

function getBoxCorners(box) {
  return [
    new THREE.Vector3(box.min.x, box.min.y, box.min.z),
    new THREE.Vector3(box.min.x, box.min.y, box.max.z),
    new THREE.Vector3(box.min.x, box.max.y, box.min.z),
    new THREE.Vector3(box.min.x, box.max.y, box.max.z),
    new THREE.Vector3(box.max.x, box.min.y, box.min.z),
    new THREE.Vector3(box.max.x, box.min.y, box.max.z),
    new THREE.Vector3(box.max.x, box.max.y, box.min.z),
    new THREE.Vector3(box.max.x, box.max.y, box.max.z),
  ];
}

function parseOrigin(originEl) {
  return {
    xyz: parseVector(originEl?.getAttribute('xyz'), [0, 0, 0]),
    rpy: parseVector(originEl?.getAttribute('rpy'), [0, 0, 0]),
  };
}

function getAutoplayValue(caseConfig, joint, index, elapsed) {
  if (caseConfig?.animationMode === 'car-example-1-sequence') {
    return getCarExample1AutoplayValue(caseConfig, joint, index, elapsed);
  }

  if (caseConfig?.animationMode === 'synchronized-doors') {
    if (joint.type === 'revolute') {
      const speed = caseConfig.animationSpeed || DEFAULT_AUTOPLAY_SPEED;
      const openAmount = easeInOutSine((Math.sin(elapsed * speed) + 1) / 2);
      return interpolateJointLimit(joint, openAmount);
    }

    if (joint.type === 'continuous') {
      return getContinuousAutoplayValue(caseConfig, joint, index, elapsed);
    }

    return joint.min <= 0 && joint.max >= 0 ? 0 : joint.min;
  }

  if (caseConfig?.animationMode === 'drawer-slide') {
    const speed = caseConfig.animationSpeed || DEFAULT_AUTOPLAY_SPEED;
    const openAmount = easeInOutSine((Math.sin(elapsed * speed) + 1) / 2);
    return interpolateJointLimit(joint, openAmount);
  }

  if (caseConfig?.animationMode === 'urdf-limits') {
    const speed = caseConfig.animationSpeed || DEFAULT_AUTOPLAY_SPEED;
    const openAmount = easeInOutSine((Math.sin(elapsed * speed) + 1) / 2);
    return interpolateJointLimit(joint, openAmount);
  }

  const speed = caseConfig?.animationSpeed || DEFAULT_AUTOPLAY_SPEED;
  if (joint.type === 'continuous') {
    return getContinuousAutoplayValue(caseConfig, joint, index, elapsed);
  }

  const openAmount = easeInOutSine((Math.sin(elapsed * speed + index * 0.82) + 1) / 2);
  return interpolateJointLimit(joint, openAmount);
}

function getContinuousAutoplayValue(caseConfig, joint, index, elapsed) {
  const speed = (caseConfig?.animationSpeed || DEFAULT_AUTOPLAY_SPEED) * 2.4;
  const phase = index * 0.31;
  return elapsed * speed + phase;
}

function getCarExample1AutoplayValue(caseConfig, joint, index, elapsed) {
  const speed = caseConfig?.animationSpeed || DEFAULT_AUTOPLAY_SPEED;

  if (joint.type === 'continuous') {
    const wheelAmount = easeInOutSine(triangleWave(elapsed * speed * 0.32 + index * 0.17));
    return interpolateJointLimit(joint, wheelAmount);
  }

  if (joint.type !== 'revolute') {
    return interpolateJointLimit(joint, 0);
  }

  const openAmount = easeInOutSine(triangleWave(elapsed * speed * 0.15));
  return interpolateJointLimit(joint, openAmount);
}

function triangleWave(value) {
  const cycle = ((value % 1) + 1) % 1;
  return 1 - Math.abs(cycle * 2 - 1);
}

function wrapAngle(value) {
  const fullTurn = Math.PI * 2;
  return ((((value + Math.PI) % fullTurn) + fullTurn) % fullTurn) - Math.PI;
}

function easeInOutSine(value) {
  return -(Math.cos(Math.PI * value) - 1) / 2;
}

function interpolateJointLimit(joint, amount) {
  return joint.min + (joint.max - joint.min) * amount;
}

function parseVector(value, fallback) {
  const parts = String(value || '')
    .trim()
    .split(/\s+/)
    .filter(Boolean)
    .map(Number);

  if (parts.length !== 3 || parts.some((part) => Number.isNaN(part))) {
    return new THREE.Vector3(fallback[0], fallback[1], fallback[2]);
  }

  return new THREE.Vector3(parts[0], parts[1], parts[2]);
}

function parseLimits(type, limitEl) {
  if (type === 'prismatic') {
    const lower = Number(limitEl?.getAttribute('lower'));
    const upper = Number(limitEl?.getAttribute('upper'));
    return {
      min: Number.isFinite(lower) ? lower : -DEFAULT_PRISMATIC_RANGE,
      max: Number.isFinite(upper) ? upper : DEFAULT_PRISMATIC_RANGE,
    };
  }

  if (type === 'revolute') {
    const lower = Number(limitEl?.getAttribute('lower'));
    const upper = Number(limitEl?.getAttribute('upper'));
    return {
      min: Number.isFinite(lower) ? lower : 0,
      max: Number.isFinite(upper) ? upper : DEFAULT_REVOLUTE_RANGE,
    };
  }

  if (type === 'continuous') {
    return {
      min: -DEFAULT_REVOLUTE_RANGE,
      max: DEFAULT_REVOLUTE_RANGE,
    };
  }

  return { min: 0, max: 0 };
}

function applyOriginToGroup(group, origin) {
  group.position.copy(origin.xyz);
  group.rotation.set(origin.rpy.x, origin.rpy.y, origin.rpy.z, 'XYZ');
}

function applyCaseUpAxis(group, upAxis = 'y') {
  group.rotation.set(0, 0, 0);
  if (String(upAxis).toLowerCase() === 'z') {
    group.rotation.x = -Math.PI / 2;
  }
  group.updateMatrixWorld(true);
}

function resolveMeshUrl(filename, basePath) {
  const normalized = filename.replace(/\\/g, '/').replace(/^package:\/\//, '');

  if (/^(https?:)?\/\//.test(normalized) || normalized.startsWith('/')) {
    return normalized;
  }

  return `${basePath}${normalized}`;
}

function createMaterial(colorIndex) {
  const isMovable = colorIndex >= 0;
  const baseColor = isMovable ? MOVABLE_COLORS[colorIndex % MOVABLE_COLORS.length] : 0x7f8985;
  return new THREE.MeshStandardMaterial({
    color: baseColor,
    roughness: isMovable ? 0.66 : 0.78,
    metalness: isMovable ? 0.04 : 0.02,
    side: THREE.DoubleSide,
  });
}

function createJointMarker(joint) {
  const marker = new THREE.Group();

  const sphere = new THREE.Mesh(
    new THREE.SphereGeometry(0.011, 12, 8),
    new THREE.MeshStandardMaterial({
      color: 0x111b1d,
      roughness: 0.5,
      metalness: 0.1,
    }),
  );
  marker.add(sphere);

  const direction = joint.axis.clone().normalize();
  const arrow = new THREE.ArrowHelper(direction, new THREE.Vector3(0, 0, 0), 0.07, 0x111b1d, 0.018, 0.011);
  marker.add(arrow);

  return marker;
}

function compactJointName(name, index) {
  const match = /J(\d+)$/i.exec(name);
  if (match) {
    return `J${match[1]}`;
  }

  const short = name.replace(/^joint[_-]?/i, '');
  return short && short.length < 18 ? short : `J${index}`;
}
