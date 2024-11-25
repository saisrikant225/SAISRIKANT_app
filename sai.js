// Main menu function
function mainMenu() {
    let choice = prompt(
        "Choose an option to view Verilog code and images for the following tasks:\n" +
        "1. Types of Programmable Logic Devices (PLA, PAL, CPLD, FPGA)\n" +
        "2. Logic Families: Digital Logic Gates, TTL, CMOS\n" +
        "3. Digital Code Converter Design\n" +
        "4. Seven-Segment Decoder Implementation (Three Levels)\n" +
        "5. Seven-Segment Decoder (Common Cathode & Anode) using Boolean Laws\n" +
        "6. Seven-Segment Decoder (Common Cathode) using K-Map\n" +
        "7. Seven-Segment Decoder (Common Anode) using K-Map\n" +
        "8. Seven-Segment Decoder using Multiplexer\n" +
        "9. Seven-Segment Decoder using Demultiplexer\n" +
        "10. Seven-Segment Decoder using 4:16 Decoder\n" +
        "11. Exit"
    );

    switch (choice) {
        case "1":
            verilogPLDs();
            break;
        case "2":
            verilogLogicFamilies();
            break;
        case "3":
            verilogCodeConverter();
            break;
        case "4":
            verilogSevenSegmentDecoder();
            break;
        case "5":
            verilogBooleanLawsDecoder();
            break;
        case "6":
            verilogKmapCathodeDecoder();
            break;
        case "7":
            verilogKmapAnodeDecoder();
            break;
        case "8":
            verilogMultiplexerDecoder();
            break;
        case "9":
            verilogDemultiplexerDecoder();
            break;
        case "10":
            verilogDecoder416();
            break;
        case "11":
            alert("Exiting. Thank you!");
            break;
        default:
            alert("Invalid choice. Please try again.");
            mainMenu();
            break;
    }
}

// 1. Verilog code for Programmable Logic Devices with image
function verilogPLDs() {
    document.getElementById('output').innerHTML = `
        <h3>Programmable Logic Devices (PLA, PAL, CPLD, FPGA)</h3>
        <p>Here is a brief explanation and Verilog code for PLA, PAL, CPLD, and FPGA.</p>
        <pre>
// Verilog Code for PLA Example
module PLA (input A, B, C, output F);
    assign F = (A & B) | (~A & C);
endmodule;

// Verilog Code for PAL Example
module PAL (input A, B, C, output F);
    assign F = (~A & B) | (A & ~C);
endmodule;

// CPLD and FPGA designs involve complex architectures and configurations.
        </pre>
        <img src="pla_1.png" alt="PLA, PAL, CPLD, FPGA Architecture" width="500" />
    `;
    mainMenu();
}

// 2. Verilog code for Logic Families with image
function verilogLogicFamilies() {
    document.getElementById('output').innerHTML = `
        <h3>Logic Families: Digital Logic Gates, TTL, CMOS</h3>
        <p>Here is a brief explanation and Verilog code for Logic Gates, TTL, and CMOS logic families.</p>
        <pre>
// Verilog Code for Logic Gates
module LogicGates(input A, B, output AND_Gate, OR_Gate, NOT_A);
    assign AND_Gate = A & B;
    assign OR_Gate = A | B;
    assign NOT_A = ~A;
endmodule;

// TTL and CMOS are physical implementations, not simulated in Verilog.
        </pre>
        <img src="images/logic_families.png" alt="Logic Families: TTL, CMOS" width="500" />
    `;
    mainMenu();
}

// 3. Verilog code for Digital Code Converter
function verilogCodeConverter() {
    document.getElementById('output').innerHTML = `
        <h3>Digital Code Converter</h3>
        <p>Here is the Verilog code to convert the input from one form of code to another.</p>
        <pre>
// Verilog Code for Code Converter using Sum of Products
module CodeConverter_SOP(input [3:0] inCode, output [3:0] outCode);
    assign outCode[3] = ...; // Derived SOP expressions
    assign outCode[2] = ...;
    assign outCode[1] = ...;
    assign outCode[0] = ...;
endmodule;

// Similarly, define for POS, NAND, and NOR implementations.
        </pre>
        <img src="images/code_converter.png" alt="Digital Code Converter" width="500" />
    `;
    mainMenu();
}

// 4. Verilog code for Seven-Segment Decoder (Three Levels)
function verilogSevenSegmentDecoder() {
    document.getElementById('output').innerHTML = `
        <h3>Seven-Segment Decoder Implementation (Three Levels)</h3>
        <p>Verilog code for a simple seven-segment decoder at the behavioral level.</p>
        <pre>
// Updated Verilog Code for Seven-Segment Decoder

// seven_segment_L57L58_20_23BEC0446
module seven_segment_L57L58_20_23BEC0446(
    input [3:0] bi,
    output reg [6:0] seg
);
    always @(*) begin
        case(bi)
            4'b0000: seg = 7'b0111111; 
            4'b0001: seg = 7'b0000110; 
            4'b0010: seg = 7'b1011011; 
            4'b0011: seg = 7'b1001111; 
            4'b0100: seg = 7'b1100110; 
            4'b0101: seg = 7'b1101101; 
            4'b0110: seg = 7'b1111101; 
            4'b0111: seg = 7'b0000111; 
            4'b1000: seg = 7'b1111111; 
            4'b1001: seg = 7'b1101111; 
            4'b1010: seg = 7'b1110111; 
            4'b1011: seg = 7'b1111100; 
            4'b1100: seg = 7'b0111001; 
            4'b1101: seg = 7'b1011110; 
            4'b1110: seg = 7'b1111001;
            4'b1111: seg = 7'b1110001; 
            default: seg = 7'b0000000; 
        endcase
    end
Endmodule

// seven_segment_L7L8_03_23BEC0446
module seven_segment_L7L8_03_23BEC0446(
    input [3:0] binary_input,
    output [6:0] seg
);
    wire not_b3, not_b2, not_b1, not_b0;
    wire and_1, and_2, and_3, and_4;

    not (not_b3, binary_input[3]);
    not (not_b2, binary_input[2]);
    not (not_b1, binary_input[1]);
    not (not_b0, binary_input[0]);

    // seg[0]
    and (and_1, not_b3, not_b2, not_b1, binary_input[0]);
    and (and_2, not_b3, binary_input[2], not_b1, not_b0);
    and (and_3, binary_input[3], not_b2, binary_input[1], binary_input[0]);
    and (and_4, binary_input[3], binary_input[2], ~binary_input[1], binary_input[0]);
    or (seg[0], and_1, and_2, and_3, and_4);

    // Similar gate-level implementations for seg[1] to seg[6]...
    // Due to space, the rest of the logic for seg[1] to seg[6] would follow a similar pattern.
endmodule

// seven_segment_L57L58_20_23BEC0446 (Alternative Version)
module seven_segment_L57L58_20_23BEC0446(
    input [3:0] binary_input,
    output [6:0] seg
);
    wire not_b3, not_b2, not_b1, not_b0;
    wire and_1, and_2, and_3, and_4;

    not (not_b3, binary_input[3]);
    not (not_b2, binary_input[2]);
    not (not_b1, binary_input[1]);
    not (not_b0, binary_input[0]);

    // seg[0]
    and (and_1, not_b3, not_b2, not_b1, binary_input[0]);
    and (and_2, not_b3, binary_input[2], not_b1, not_b0);
    and (and_3, binary_input[3], not_b2, binary_input[1], binary_input[0]);
    and (and_4, binary_input[3], binary_input[2], ~binary_input[1], binary_input[0]);
    or (seg[0], and_1, and_2, and_3, and_4);

    // Similar gate-level implementations for seg[1] to seg[6]...
    // Due to space, the rest of the logic for seg[1] to seg[6] would follow a similar pattern.
endmodule
        </pre>
    `;
}


// 5. Verilog code for Seven-Segment Decoder using Boolean Laws
function verilogBooleanLawsDecoder() {
    document.getElementById('output').innerHTML = `
        <h3>Seven-Segment Decoder using Boolean Laws</h3>
        <p>Here is the Verilog code for implementing the decoder using Boolean laws.</p>
        <pre>
// Verilog Code for Seven-Segment Decoder using Boolean Laws
module SevenSegmentBoolean(input [3:0] digit, output [6:0] segments);
    assign segments[0] = (~digit[3] & ~digit[2] & ~digit[1] & digit[0]) | ...; // A
    assign segments[1] = ...; // B
    // Define remaining segments
endmodule;
        </pre>
        <img src="images/boolean_laws_seven_segment.png" alt="Boolean Laws Seven-Segment Decoder" width="500" />
    `;
    mainMenu();
}

// 6. Verilog code for Seven-Segment Decoder using K-Map (Cathode)
function verilogKmapCathodeDecoder() {
    document.getElementById('output').innerHTML = `
        <h3>Seven-Segment Decoder using K-Map (Cathode)</h3>
        <p>Here is the Verilog code for implementing the decoder using K-map technique for common cathode.</p>
        <pre>
// Verilog Code for Seven-Segment Decoder using K-Map (Cathode)
module SevenSegmentKmapCathode(input [3:0] digit, output [6:0] segments);
    assign segments[0] = ...; // Simplified using K-Map
    assign segments[1] = ...;
    // Define remaining segments
endmodule;
        </pre>
        <img src="images/kmap_cathode_seven_segment.png" alt="K-Map Cathode Seven-Segment Decoder" width="500" />
    `;
    mainMenu();
}

// 7. Verilog code for Seven-Segment Decoder using K-Map (Anode)
function verilogKmapAnodeDecoder() {
    document.getElementById('output').innerHTML = `
        <h3>Seven-Segment Decoder using K-Map (Anode)</h3>
        <p>Here is the Verilog code for implementing the decoder using K-map technique for common anode.</p>
        <pre>
// Verilog Code for Seven-Segment Decoder using K-Map (Anode)
module SevenSegmentKmapAnode(input [3:0] digit, output [6:0] segments);
    assign segments[0] = ...; // Simplified using K-Map
    assign segments[1] = ...;
    // Define remaining segments
endmodule;
        </pre>
        <img src="images/kmap_anode_seven_segment.png" alt="K-Map Anode Seven-Segment Decoder" width="500" />
    `;
    mainMenu();
}

// 8. Verilog code for Seven-Segment Decoder using Multiplexer
function verilogMultiplexerDecoder() {
    document.getElementById('output').innerHTML = `
        <h3>Seven-Segment Decoder using Multiplexer</h3>
        <p>Here is the Verilog code for implementing the decoder using a Multiplexer.</p>
        <pre>
// Verilog Code for 16:1 Multiplexer Implementation
module Mux16to1(input [3:0] select, input [15:0] data, output reg segment);
    always @(*) begin
        case(select)
            4'b0000: segment = data[0];
            // Define for other selections
            default: segment = 0;
        endcase
    end
endmodule;
        </pre>
        <img src="images/mux_seven_segment.png" alt="Multiplexer Seven-Segment Decoder" width="500" />
    `;
    mainMenu();
}

// 9. Verilog code for Seven-Segment Decoder using Demultiplexer
function verilogDemultiplexerDecoder() {
    document.getElementById('output').innerHTML = `
        <h3>Seven-Segment Decoder using Demultiplexer</h3>
        <p>Here is the Verilog code for implementing the decoder using a Demultiplexer.</p>
        <pre>
// Verilog Code for 1:16 Demultiplexer Implementation
module Demux1to16(input [3:0] select, input data, output reg [15:0] segments);
    always @(*) begin
        case(select)
            4'b0000: segments[0] = data;
            // Define for other selections
            default: segments[15:0] = 0;
        endcase
    end
endmodule;
        </pre>
        <img src="images/demux_seven_segment.png" alt="Demultiplexer Seven-Segment Decoder" width="500" />
    `;
    mainMenu();
}

// 10. Verilog code for Seven-Segment Decoder using 4:16 Decoder
function verilogDecoder416() {
    document.getElementById('output').innerHTML = `
        <h3>Seven-Segment Decoder using 4:16 Decoder</h3>
        <p>Here is the Verilog code for implementing the decoder using a 4:16 Decoder.</p>
        <pre>
// Verilog Code for 4:16 Decoder Implementation
module Decoder4to16(input [3:0] select, output [15:0] segments);
    assign segments = (1 << select);
endmodule;
        </pre>
        <img src="decoder1.png" alt="4:16 Decoder Seven-Segment Decoder" width="500" />
    `;
    mainMenu();
}

