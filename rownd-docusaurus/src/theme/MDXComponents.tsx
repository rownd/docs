import MDXComponents from '@theme-original/MDXComponents';
import type {MDXComponentsObject} from '@theme/MDXComponents';
import React from 'react';
import Card from '../components/RowndMDX/Card';
import CardGroup from '../components/RowndMDX/CardGroup';
import Note from '../components/RowndMDX/Note';
import Info from '../components/RowndMDX/Info';
import Accordion from '../components/RowndMDX/Accordion';
import Snippet from '../components/RowndMDX/Snippet';
import CodeGroup from '../components/RowndMDX/CodeGroup';
import Warning from '../components/RowndMDX/Warning';
import Tip from '../components/RowndMDX/Tip';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import Tab from '../components/RowndMDX/Tab';
import Frame from '../components/RowndMDX/Frame';
import ParamField from '../components/RowndMDX/ParamField';
import ResponseField from '../components/RowndMDX/ResponseField';
import Endpoint from '../components/RowndMDX/Endpoint';

export default {
  ...MDXComponents,
  Card,
  CardGroup,
  Note,
  Info,
  Accordion,
  Snippet,
  CodeGroup,
  Warning,
  Tip,
  Tab,
  Tabs,
  TabItem,
  Frame,
  ParamField,
  ResponseField,
  Endpoint,
} as MDXComponentsObject;


