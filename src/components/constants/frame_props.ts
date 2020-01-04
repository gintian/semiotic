//size is a special case and handled checking the actual values in the size array

export const xyFrameDataProps = [
  "lines",
  "points",
  "summaries",
  "xScaleType",
  "yScaleType",
  "xAccessor",
  "yAccessor",
  "lineDataAccessor",
  "areaDataAccessor",
  "summaryDataAccessor",
  "lineType",
  "showLinePoints",
  "showSummaryPoints",
  "defined",
  "summaryType"
]

export const xyFrameChangeProps = [
  ...xyFrameDataProps,
  "name",
  "title",
  "margin",
  "axes",
  "position",
  "xExtent",
  "yExtent",
  "invertX",
  "invertY",
  "hoverAnnotation",
  "additionalDefs",
  "defined",
  "lineStyle",
  "pointStyle",
  "summaryStyle",
  "lineClass",
  "pointClass",
  "areaClass",
  "summaryClass",
  "canvasPoints",
  "customPointMark",
  "customLineMark",
  "lineIDAccessor"
]

export const orFrameChangeProps = [
  "data",
  "name",
  "orient",
  "title",
  "margin",
  "format",
  "position",
  "oScaleType",
  "rScaleType",
  "oExtent",
  "rExtent",
  "invertO",
  "invertR",
  "oAccessor",
  "rAccessor",
  "oPadding",
  "projection",
  "type",
  "summaryType",
  "connectorType",
  "className",
  "additionalDefs",
  "renderKey",
  "dataAccessor",
  "rBaseline",
  "sortO",
  "oSort",
  "dynamicColumnWidth",
  "renderFn",
  "style",
  "connectorStyle",
  "summaryStyle",
  "summaryPosition",
  "oLabel",
  "axes"
]

export const networkFrameChangeProps = [
  "name",
  "graph",
  "nodes",
  "edges",
  "title",
  "margin",
  "position",
  "nodeIDAccessor",
  "sourceAccessor",
  "targetAccessor",
  "nodeSizeAccessor",
  "customNodeIcon",
  "nodeLabels",
  "edgeWidthAccessor",
  "networkType",
  "className",
  "additionalDefs",
  "renderFn",
  "nodeStyle",
  "edgeStyle",
  "edgeType"
]

const sharedframeproptypes = {
  useSpans: true,
  title: true,
  margin: true,
  name: true,
  dataVersion: true,
  frameKey: true,
  size: true,
  position: true,
  canvasPostProcess: true,
  additionalDefs: true,
  className: true,
  customHoverBehavior: true,
  customClickBehavior: true,
  customDoubleClickBehavior: true,
  hoverAnnotation: true,
  disableContext: true,
  interaction: true,
  svgAnnotationRules: true,
  htmlAnnotationRules: true,
  tooltipContent: true,
  optimizeCustomTooltipPosition: true,
  annotations: true,
  baseMarkProps: true,
  backgroundGraphics: true,
  foregroundGraphics: true,
  beforeElements: true,
  afterElements: true,
  annotationSettings: true,
  renderKey: true,
  renderOrder: true,
  legend: true,
  onUnmount: true,
  sketchyRenderingEngine: true
}

export const xyframeproptypes = {
  ...sharedframeproptypes,
  lines: true,
  points: true,
  summaries: true,
  axes: true,
  matte: true,
  xScaleType: true,
  yScaleType: true,
  xExtent: true,
  yExtent: true,
  invertX: true,
  invertY: true,
  xAccessor: true,
  yAccessor: true,
  lineDataAccessor: true,
  summaryDataAccessor: true,
  lineType: true,
  summaryType: true,
  lineRenderMode: true,
  pointRenderMode: true,
  summaryRenderMode: true,
  showLinePoints: true,
  showSummaryPoints: true,
  defined: true,
  lineStyle: true,
  pointStyle: true,
  summaryStyle: true,
  lineClass: true,
  pointClass: true,
  areaClass: true,
  summaryClass: true,
  canvasPoints: true,
  canvasLines: true,
  canvasAreas: true,
  canvasSummaries: true,
  customPointMark: true,
  customLineMark: true,
  customAreaMark: true,
  customSummaryMark: true,
  lineIDAccessor: true,
  minimap: true,
  useSummariesAsInteractionLayer: true,
  filterRenderedLines: true
}

export const ordinalframeproptypes = {
  ...sharedframeproptypes,
  data: true,
  oScaleType: true,
  rScaleType: true,
  oExtent: true,
  rExtent: true,
  invertO: true,
  invertR: true,
  oAccessor: true,
  rAccessor: true,
  oPadding: true,
  projection: true,
  type: true,
  summaryType: true,
  connectorType: true,
  tooltipContent: true,
  optimizeCustomTooltipPosition: true,
  baseMarkProps: true,
  dataAccessor: true,
  rBaseline: true,
  sortO: true,
  oSort: true,
  pixelColumnWidth: true,
  dynamicColumnWidth: true,
  renderMode: true,
  summaryRenderMode: true,
  connectorRenderMode: true,
  style: true,
  connectorStyle: true,
  summaryStyle: true,
  canvasPieces: true,
  canvasConnectors: true,
  canvasSummaries: true,
  summaryPosition: true,
  oLabel: true,
  pieceIDAccessor: true,
  pieceHoverAnnotation: true,
  summaryHoverAnnotation: true,
  axes: true,
  ordinalAlign: true,
  multiAxis: true,
  pieceClass: true,
  summaryClass: true
}

export const networkframeproptypes = {
  ...sharedframeproptypes,
  nodes: true,
  edges: true,
  graph: true,
  nodeIDAccessor: true,
  sourceAccessor: true,
  targetAccessor: true,
  nodeSizeAccessor: true,
  customNodeIcon: true,
  customEdgeIcon: true,
  nodeRenderKey: true,
  edgeRenderKey: true,
  edgeRenderMode: true,
  nodeRenderMode: true,
  canvasEdges: true,
  canvasNodes: true,
  nodeLabels: true,
  edgeWidthAccessor: true,
  networkType: true,
  renderFn: true,
  nodeStyle: true,
  edgeStyle: true,
  edgeType: true,
  filterRenderedNodes: true
}

export const responsiveprops = {
  responsiveWidth: true,
  responsiveHeight: true,
  debounce: true
}
