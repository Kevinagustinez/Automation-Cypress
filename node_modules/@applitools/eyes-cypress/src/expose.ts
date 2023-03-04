/*
 * The types here are compiled via `ttsc` and `api-extractor`, and are used to describe the inputs to
 * Eyes-Cypress custom commands. The reason they are not written in the `index.d.ts` file next to the
 * `declare global { namespace Cypress {...}}` statement is that `api-extractor` has a limitation (at
 * the time of writing this) that drops the `declare global` statement. So it's important to not pass
 * `index.d.ts` through `api-extractor`,but keep the types in this file go through it, to produce the
 * correct types for the SDK just like all other conventional SDK's.
 **/
/// <reference types="cypress" />
import type * as api from '@applitools/eyes-api'
import {type EyesSelector, type TestResultsStatus} from '@applitools/eyes-api'

export type {EyesSelector, TestResultsStatus}

type MaybeArray<T> = T | T[]

type LegacyRegion = {left: number; top: number; width: number; height: number}
type Selector = {selector: string; type?: 'css' | 'xpath'; nodeType?: 'element' | 'shadow-root'} | 'string'
type Element = HTMLElement | JQuery<HTMLElement>
type ElementWithOptions = {element: Element; regionId?: string; padding?: any}

export type CypressCheckSettings = api.CheckSettingsAutomationPlain<Element, Selector> & {
  tag?: CypressCheckSettings['name']

  target?: 'window' | 'region'
  selector?: Selector
  element?: Element

  ignore?: MaybeArray<NonNullable<CypressCheckSettings['ignoreRegions']>[number] | LegacyRegion | ElementWithOptions>
  layout?: MaybeArray<NonNullable<CypressCheckSettings['layoutRegions']>[number] | LegacyRegion | ElementWithOptions>
  content?: MaybeArray<NonNullable<CypressCheckSettings['contentRegions']>[number] | LegacyRegion | ElementWithOptions>
  strict?: MaybeArray<NonNullable<CypressCheckSettings['strictRegions']>[number] | LegacyRegion | ElementWithOptions>
  floating?: MaybeArray<
    | NonNullable<CypressCheckSettings['floatingRegions']>[number]
    | ((ElementWithOptions | Selector | LegacyRegion) & {
        maxUpOffset?: number
        maxDownOffset?: number
        maxLeftOffset?: number
        maxRightOffset?: number
      })
  >
  accessibility?: MaybeArray<
    | NonNullable<CypressCheckSettings['accessibilityRegions']>[number]
    | ((ElementWithOptions | Selector | LegacyRegion) & {accessibilityType?: api.AccessibilityRegionTypePlain})
  >
  scriptHooks?: CypressCheckSettings['hooks']
  ignoreCaret?: boolean
  ignoreDisplacements?: boolean
}
export type CypressEyesConfig = api.ConfigurationPlain<Element, Selector> & {
  browser?: MaybeArray<
    | NonNullable<CypressEyesConfig['browsersInfo']>[number]
    | {deviceName: string; screenOrientation?: api.ScreenOrientationPlain; name?: string}
  >

  batchId?: NonNullable<CypressEyesConfig['batch']>['id']
  batchName?: NonNullable<CypressEyesConfig['batch']>['name']
  batchSequence?: NonNullable<CypressEyesConfig['batch']>['sequenceName']
  notifyOnCompletion?: NonNullable<CypressEyesConfig['batch']>['notifyOnCompletion']

  envName?: CypressEyesConfig['environmentName']

  accessibilitySettings?: NonNullable<CypressEyesConfig['defaultMatchSettings']>['accessibilitySettings']
}

export type CypressTestResultsSummary = api.TestResultsSummary

export {type EyesPluginConfig} from './plugin'

import plugin from './plugin'
export default plugin
