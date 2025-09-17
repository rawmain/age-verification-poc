# Getting started

The following sections provide instructions to build and run the app for development purposes.

## Prerequisites

### NodeJS and Ruby

To run the project you need to install the correct version of NodeJS and Ruby.
We recommend the use of a virtual environment of your choice. For ease of use, this guide adopts [nodenv](https://github.com/nodenv/nodenv) for NodeJS, [rbenv](https://github.com/rbenv/rbenv) for Ruby.

The node version used in this project is stored in [.node-version](.node-version),
while the version of Ruby is stored in [.ruby-version](.ruby-version).

### React Native

Follow the [official tutorial](https://reactnative.dev/docs/set-up-your-environment) for installing the `React Native CLI` for your operating system.

If you have a macOS system, you can follow both the tutorial for iOS and for Android. If you have a Linux or Windows system, you need only to install the development environment for Android.

## Build the app

In order to build the app, we use [yarn](https://yarnpkg.com/) for managing javascript dependencies.
As stated [previously](#nodejs-and-ruby), we also use `nodenv` and `rbenv` for managing the environment:

```bash
# Clone the repository
$ git clone https://github.com/pagopa/age-verification-poc

# CD into the repository
$ cd age-verification-poc

# Install NodeJS with nodenv, the returned version should match the one in the .node-version file
$ nodenv install && nodenv version

# Install Ruby with rbenv, the returned version should match the one in the .ruby-version file
$ rbenv install && rbenv version

# Install yarn and rehash to install shims
$ npm install -g yarn && nodenv rehash

# Install bundle
$ gem install bundle

# Install the required Gems from the Gemfile
# Run this only during the first setup and when Gems dependencies change
$ bundle install

# Install dependencies
# Run this only during the first setup and when JS dependencies change
$ yarn install

# Install podfiles when targeting iOS (ignore this step for Android)
# Run this only during the first setup and when Pods dependencies change
$ cd iOS && bundle exec pod install && cd ..
```

## Run the app

### Android Emulator

An Android Emulator must be [created and launched manually](https://developer.android.com/studio/run/managing-avds).

Then, from your command line, run these commands:

```bash
# Perform the port forwarding
$ adb reverse tcp:8081 tcp:8081;adb reverse tcp:3000 tcp:3000;adb reverse tcp:9090 tcp:9090

# Run Android build
$ yarn run-android
```

However the Android Emulator is not fully supported because it doesn't support the hardware-backed keystore.

### iOS Simulator

```bash
# Run iOS build
$ yarn run-ios
```

### Physical devices

The React Native documentation provides a [useful guide](https://reactnative.dev/docs/running-on-device) for running projects on physical devices.

> [!IMPORTANT]  
> For building the app on an iOS physical device, a few additional steps are necessary:
> If you're not part of the PagoPA S.p.A. organization then you must change the `Bundle Identifier` to something unique.
> This adjustment can be made in the `Signing (Debug)` section of Xcode;
