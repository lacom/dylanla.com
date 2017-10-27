import Typography from 'typography';
import USWebDesignStandards from 'typography-theme-us-web-design-standards';

const typography = new Typography(USWebDesignStandards);

// Hot reload typography in development.
if (process.env.NODE_ENV !== 'production') {
  typography.injectStyles();
}

export default typography;
