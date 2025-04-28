import eslintPluginImport from 'eslint-plugin-import';
import typescriptPlugin from '@typescript-eslint/eslint-plugin';
import typescriptParser from '@typescript-eslint/parser';

import { FlatCompat } from '@eslint/eslintrc';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
	baseDirectory: __dirname,
});

export default [
	...compat.extends('prettier'),
	{
		files: ['**/*.ts', '**/*.tsx'],
		languageOptions: {
			parser: typescriptParser,
			parserOptions: {
				project: ['./tsconfig.json'],
			},
		},
		plugins: {
			import: eslintPluginImport,
			'@typescript-eslint': typescriptPlugin,
		},
		rules: {
			'semi': 'error',
			'prefer-arrow-callback': 'error',
			'prefer-template': 'error',
			'comma-dangle': 'off',
			'no-underscore-dangle': 'off',
			'no-param-reassign': 'off',
			'no-return-assign': 'off',
			'camelcase': 'off',
			'import/extensions': 'off',
			'@typescript-eslint/no-redeclare': 'off',
		},
		settings: {
			'import/parsers': {
				'@typescript-eslint/parser': ['.ts', '.tsx'],
			},
			'import/resolver': {
				typescript: {},
			},
		},
	},
];
