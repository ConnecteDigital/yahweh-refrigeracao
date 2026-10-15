#!/usr/bin/env bash
# Instala Ghidra e o JAR do JADX nas versões fixadas pelo rea-agents@6.5.0,
# nos caminhos que o .mcp.json espera (/opt/rea/ghidra e /opt/rea/jadx).
# Requer JDK 21 completo (javac) no PATH.
set -euo pipefail

PREFIX="${REA_TOOLS_PREFIX:-/opt/rea}"

GHIDRA_URL="https://github.com/NationalSecurityAgency/ghidra/releases/download/Ghidra_12.1.4_build/ghidra_12.1.4_PUBLIC_20260921.zip"
GHIDRA_SHA256="ddac49f903da9d5bac833e5cc79395098b9c33cfd3279be5f31bd00387d2d4db"
JADX_URL="https://github.com/1013503897/jadx-headless-mcp/releases/download/v0.7.1/jadx-headless-mcp-0.7.1-all.jar"
JADX_SHA256="6e5eacf500b64292bfb73c49797c1958f6ee44646e43e868039ae7feb573ff75"

tmp="$(mktemp -d)"
trap 'rm -rf "$tmp"' EXIT
mkdir -p "$PREFIX"

if [ ! -x "$PREFIX/ghidra/support/analyzeHeadless" ]; then
  curl -fsSL --retry 3 -o "$tmp/ghidra.zip" "$GHIDRA_URL"
  echo "$GHIDRA_SHA256  $tmp/ghidra.zip" | sha256sum -c -
  unzip -q "$tmp/ghidra.zip" -d "$tmp/ghidra"
  rm -rf "$PREFIX/ghidra"
  mv "$tmp/ghidra/ghidra_12.1.4_PUBLIC" "$PREFIX/ghidra"
fi

jar="$PREFIX/jadx/jadx-headless-mcp-0.7.1-all.jar"
if [ ! -f "$jar" ]; then
  mkdir -p "$PREFIX/jadx"
  curl -fsSL --retry 3 -o "$tmp/jadx.jar" "$JADX_URL"
  echo "$JADX_SHA256  $tmp/jadx.jar" | sha256sum -c -
  mv "$tmp/jadx.jar" "$jar"
fi

echo "Ghidra: $PREFIX/ghidra"
echo "JADX:   $jar"
