var dataset;

function DataLoader(fileName, format) {
  this.fileName = fileName;
  this.format = format;
  this.data = this.load();
}

DataLoader.prototype.load = function() {
  $.ajax({
    async: false,
    type: "GET",
    url: this.fileName,
    dataType: "text",
    success: function(data) {
      // console.log(data);
      dataset = data;
    }
  });
  return dataset;
};