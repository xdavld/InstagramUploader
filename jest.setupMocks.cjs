global.URL.createObjectURL = jest.fn(() => 'mocked-url');

// Mock FileReader mit notwendigen Eigenschaften
class MockFileReader {
  static EMPTY = 0;
  static LOADING = 1;
  static DONE = 2;

  onload = null;
  onerror = null;

  readAsDataURL = jest.fn().mockImplementation(function() {
    if (this.onload) {
      this.onload({});
    }
  });
}

global.FileReader = MockFileReader;
