module.exports = {
    content: [
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.jsx',
        './resources/js/**/*.mdx',
    ],
    theme: {
        extend: {
            backgroundColor: {
                skin: {
                    fill: 'rgba(var(--background))',
                    button: {
                        primary: {
                            DEFAULT: 'rgba(var(--button-primary-bg))',
                            hover: 'rgba(var(--button-primary-bg-hover))',
                        },
                        secondary: {
                            DEFAULT: 'rgba(var(--button-secondary-bg))',
                            hover: 'rgba(var(--button-secondary-bg-hover))',
                        },
                    },
                    input: {
                        DEFAULT: 'rgba(var(--input-bg))',
                        focus: 'rgba(var(--input-bg-focus))',
                        error: {
                            DEFAULT: 'rgba(var(--input-error-bg))',
                            focus: 'rgba(var(--input-error-bg-focus))',
                        },
                    },
                    option: {
                        hover: 'rgba(var(--option-bg-hover))',
                        error: {
                            hover: 'rgba(var(--option-error-bg-hover))',
                        },
                    },
                },
            },
            borderColor: {
                skin: {
                    DEFAULT: 'rgba(var(--border-color))',
                    button: {
                        primary: {
                            DEFAULT: 'rgba(var(--button-primary-border))',
                            hover: 'rgba(var(--button-primary-border-hover))',
                        },
                        secondary: {
                            DEFAULT: 'rgba(var(--button-secondary-border))',
                            hover: 'rgba(var(--button-secondary-border-hover))',
                        },
                    },
                    input: {
                        DEFAULT: 'rgba(var(--input-border))',
                        focus: 'rgba(var(--input-border-focus))',
                        error: {
                            DEFAULT: 'rgba(var(--input-error-border))',
                            focus: 'rgba(var(--input-error-border-focus))',
                        },
                    },
                },
            },
            borderRadius: {
                'skin': "var(--border-radius)",
                'skin-button': "var(--button-border-radius)",
                'skin-input': "var(--input-border-radius)",
            },
            borderWidth: {
                'skin-width': "var(--border-width)",
                'skin-button-primary-width': "var(--button-primary-border-width)",
                'skin-button-secondary-width': "var(--button-secondary-border-width)",
                'skin-input-width': "var(--input-border-width)",
            },
            textColor: {
                skin: {
                    primary: 'rgba(var(--text-primary))',
                    secondary: 'rgba(var(--text-secondary))',
                    link: {
                        DEFAULT: 'rgba(var(--text-link))',
                        hover: 'rgba(var(--text-link-hover))',
                    },
                    button: {
                        primary: {
                            DEFAULT: 'rgba(var(--button-primary-text))',
                            hover: 'rgba(var(--button-primary-text-hover))',
                        },
                        secondary: {
                            DEFAULT: 'rgba(var(--button-secondary-text))',
                            hover: 'rgba(var(--button-secondary-text-hover))',
                        },
                    },
                    input: {
                        DEFAULT: 'rgba(var(--input-text))',
                        focus: 'rgba(var(--input-text-focus))',
                        placeholder: 'rgba(var(--input-text-placeholder))',
                        error: {
                            DEFAULT: 'rgba(var(--input-error-text))',
                            placeholder: 'rgba(var(--input-error-text-placeholder))',
                        }
                    },
                    option: {
                        hover: 'rgba(var(--option-text-hover))',
                        error: {
                            hover: 'rgba(var(--option-error-text-hover))',
                        },
                    },
                },
            },
            lineClamp: {
                //
            },
            typography: {
                DEFAULT: {
                    css: {
                        '--tw-prose-body': 'rgba(var(--text-primary))',
                        '--tw-prose-headings': 'rgba(var(--text-primary))',
                        '--tw-prose-lead': 'rgba(var(--text-primary))',
                        '--tw-prose-links': 'rgba(var(--text-link))',
                        '--tw-prose-bold': 'rgba(var(--text-primary))',
                        '--tw-prose-counters': 'rgba(var(--text-primary))',
                        '--tw-prose-bullets': 'rgba(var(--text-primary))',
                        '--tw-prose-hr': 'rgba(var(--border-color))',
                        '--tw-prose-quotes': 'rgba(var(--text-primary))',
                        '--tw-prose-quote-borders': 'rgba(var(--border-color))',
                        '--tw-prose-captions': 'rgba(var(--text-primary))',
                        '--tw-prose-code': 'rgba(var(--text-primary))',
                        '--tw-prose-pre-code': 'rgba(var(--input-text))',
                        '--tw-prose-pre-bg': 'rgba(var(--input-bg))',
                        '--tw-prose-th-borders': 'rgba(var(--border-color))',
                        '--tw-prose-td-borders': 'rgba(var(--border-color))',
                        a: {
                            '&:hover': {
                                color: 'rgba(var(--text-link-hover))',
                            },
                        },
                    },
                },
            },
        },
    },
    plugins: [
        require('@tailwindcss/typography'),
        require('@tailwindcss/line-clamp'),
    ]
};
