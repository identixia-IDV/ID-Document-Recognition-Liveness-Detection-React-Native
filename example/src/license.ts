/**
 * Demo FP1 licenses — same keys as native DocumentReader Android / iOS Apps.
 * Bound to applicationId / bundle id below. Request a new key if you change the id.
 */
import { Platform } from 'react-native';


/** Android demo applicationId */
export const ANDROID_APPLICATION_ID = 'com.identixia.documentreader';


/** iOS demo bundle id (Release / shipping) */
export const IOS_BUNDLE_ID = 'com.identixia.documentreader.app';


const ANDROID_LICENSE =
  'pyyR2AECeh21y9b8Hr8qV+eCU+Z/FxrQW4AuHbWRGCOvUWIAAADlU7l49ZZrPKza5LRx3Ay8oR2jeHXg/UuW7X6xBbx8J+eG2IIpS/723TKHhcdNKplVYQDTfJfiN4G8AtdbPU68UvdD2R0/M1WSD3fp+kQ65c1kOPtu9/TsmdAhGEPqkQwzU2YAMGQCMGe+e0ArWSLvIoqxVuzPpmcZBI+Xi+/P0/0lloaNJ5smBqESAls3KZw1WJEYsjMt3QIwaVtHc8S84VdGlA/UrzLRYOqyPGFSED7KdcCvWDkjHrCSGPPPzmTCqItDN78/4A6p';


const IOS_LICENSE =
  'pyyR2AECGxM88KoV67kjyUExX1uq3nOlD0x6wYmAdcdxHmEAAABH0F0Fpfsrb2kutZhsGTkFIsIlA5yVxSr7oDJ8PdaqJwG8RmkUXj/Iy7rZGrmB76Rk4/wTXtU8RYM8BB7Hfth4YcoiSugRW4gnu9BUvSuXurTLj1d5vrux8px4Zywydd+KZwAwZQIwJKDo8577/v8VeG/+tdQTAMSPt4W/PEIOvFJJSXKaCOwO4wMhoxrtvVmfrlfLwjI1AjEA3rRazlaPTM4Oi21gKYpw6B0ll5MxEyrKdKO7QbUmxwL/if8DfL8ZwBwJI85ByH8X';


export function demoLicense(): string {
  return Platform.OS === 'ios' ? IOS_LICENSE : ANDROID_LICENSE;
}
