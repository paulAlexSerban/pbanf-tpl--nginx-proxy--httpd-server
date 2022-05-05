module.exports = {
  branches: "main",
  repositoryUrl: "https://github.com/paulAlexSerban/tpl---reverse-proxy-web-server",
  plugins: [
    "@semantic-release/commit-analyzer",
    "@semantic-release/release-notes-generator",
    ["@semantic-release/npm", {
      npmPublish: false,
    }],
    ["@semantic-release/exec", {
      "prepareCmd": "npm version ${nextRelease.version} --force",
    }],
    [
      "@semantic-release/github",
      { assets: [ {path: "build.zip", label: "Build"} ] }
    ],
    [
      '@semantic-release/changelog',
      { changelogFile: 'CHANGELOG.md' }
    ],
    [ '@semantic-release/git',
      { assets: ['CHANGELOG.md', 'docs/**'],
        message: 'chore(release): set `package.json` to ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}' }
    ]
  ],
};
