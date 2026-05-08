import { Loader } from '@mantine/core';

export default function BasicLoader({
    color = '#0c0d1a',
    size = 24,
    type = 'oval',
}) {
    return (
        <Loader
            classNames={{ root: 'loader-root' }}
            type={type}
            color={color}
            size={size}
        />
    );
}
