import Typography from 'typography';
import USWebDesignStandards from 'typography-theme-us-web-design-standards';

const typography = new Typography(USWebDesignStandards);
const { rhythm, scale } = typography;

// Hot reload typography in development.
if (process.env.NODE_ENV !== 'production') {
  typography.injectStyles();
}

export { rhythm, scale, typography as default };
