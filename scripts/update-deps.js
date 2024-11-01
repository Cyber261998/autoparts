const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// 检查并更新特定依赖
const depsToUpdate = {
  'rollup-plugin-inject': '@rollup/plugin-inject@^5.0.5',
  'sourcemap-codec': '@jridgewell/sourcemap-codec@^1.4.15',
  'inflight': 'lru-cache@^10.2.0',
  'uuid': '^9.0.1',
  'debug': '^4.3.4',
  'glob': '^10.3.10',
  'rimraf': '^5.0.5',
  'gauge': '^5.0.1',
  'npmlog': '^7.0.1',
  'are-we-there-yet': '^3.0.1'
};

// 更新依赖
Object.entries(depsToUpdate).forEach(([oldPkg, newPkg]) => {
  try {
    execSync(`npm uninstall ${oldPkg}`);
    execSync(`npm install ${newPkg}`);
  } catch (error) {
    console.log(`Failed to update ${oldPkg}: ${error.message}`);
  }
}); 