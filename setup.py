from setuptools import setup, find_namespace_packages

setup(
    name="roboto",
    version="1.0.0",
    packages=find_namespace_packages(
        include=[
            "cli",
            "cli.*",
            "config",
            "config.*",
            "core",
            "core.*",
            "server",
            "server.*",
            "launcher",
            "launcher.*",
        ]
    ),
    entry_points={
        "console_scripts": [
            "roboto=cli.main:run",
        ]
    },
)
