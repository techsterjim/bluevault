import React from 'react';
import html2canvas from 'html2canvas';
import { jsPDF } from "jspdf";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

class Exporter extends React.Component {
  constructor(props) {
    super(props);
  }

  export = (type, name) => {
    html2canvas(document.querySelector(`#capture`)).then(canvas => {
      let dataURL = canvas.toDataURL('image/png');

      if (type === 'pdf') {
        const pdf = new jsPDF({
          orientation: "landscape",
          unit: "in",
          format: [14, 10]
        });

        pdf.addImage(dataURL, 'PNG', 0.6, 0.6);
        pdf.save(`${name}.pdf`);
        toast.success("PDF generated successfully!");

      } else if (type === 'png') {
        var link = document.createElement('a');
        link.download = `${name}.png`;
        link.href = dataURL;
        link.click();
        toast.success("PNG generated successfully!");
      }
    }).catch(error => {
      toast.error("Failed to generate file. Please try again.");
      console.error('Error generating file:', error);
    });
  }

  render() {
    return (
      <div>
        <button className="btn btn--dark" onClick={() => this.export("pdf", "my-content")}>Export as PDF</button>
        <div id="capture">
          {this.props.children} {/* Any child component rendered here will be exported as pdf/png */}
        </div>
      </div>
    );
  }
}

export default Exporter;