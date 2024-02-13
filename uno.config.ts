import {
  defineConfig,
  presetIcons,
  presetTypography,
  presetUno,
  presetWebFonts,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'
import type { UserConfig } from '@unocss/core'
import { themeConfig } from './utils/constants'

const colors: string[] = Object.entries(themeConfig.colors)
  .map(([key, value]) =>
    [
      `bg-${key}-500:20`,
      `fill-${key}-300`,
      `dark:fill-${key}-800`,
      ...Object.keys(value as Record<string, string>)
        .map(item => [`text-${key}-${item}`, `bg-${key}-${item}`, `dark:text-${key}-${item}`, `dark:bg-${key}-${item}`]),
    ].flat(),
  ).flat()

export const unocssConfig: UserConfig<any> = {
  shortcuts: [
    ['btn', 'px-4 py-1 rounded inline-block bg-teal-600 text-white cursor-pointer hover:bg-teal-700 disabled:cursor-default disabled:bg-gray-600 disabled:opacity-50'],
    ['icon-btn', 'inline-block cursor-pointer select-none opacity-75 transition duration-200 ease-in-out hover:opacity-100 hover:text-teal-600'],
  ],
  presets: [
    presetUno(),
    presetIcons({
      extraProperties: {
        'display': 'inline-block',
        'height': '1.2em',
        'width': '1.2em',
        'vertical-align': 'text-bottom',
      },
    }),
    presetTypography(),
    presetWebFonts({
      provider: 'bunny',
      fonts: {
        sans: ['Poppins', 'Poppins:400, 500,700'],
        serif: ['Yeseva One', 'Yeseva One:400, 500, 700'],
        mono: 'DM Sans Mono',
      },
    }),
  ],
  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
  ],
  theme: themeConfig,
  safelist: [
    ...colors,
  ],
}

export default defineConfig(unocssConfig)
